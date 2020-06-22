import { Component, OnInit } from '@angular/core';
import {ParamMap, Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-drview',
  templateUrl: './drview.component.html',
  styleUrls: ['./drview.component.css']
})
export class DrviewComponent implements OnInit {
  selectedItemId: string;
  private username: string;
  constructor(public route:Router,public rou:ActivatedRoute) { }

  public getUsername(){
    return this.username;
  };

  public setUsername(value:string){
    this.username =value;
  };


  ngOnInit() {

    this.rou.paramMap.subscribe((params) =>{
      this.username= params.get("username");

    })

    this.route.navigate(['dashboard'],{relativeTo:this.rou});

  }




  clicknav(value: string) {

    this.selectedItemId=value;
    if(value=='donate'){
      this.route.navigate(['donate'],{relativeTo:this.rou});

    }else if(value=='dashboard'){
      this.route.navigate(['dashboard'],{relativeTo:this.rou});


    }else if(value=='profile'){

      this.route.navigate(['profile'],{relativeTo:this.rou});

    }
    else{

      this.route.navigate(['/home']);
    }


  }

  logout() {
    this.route.navigate(['/home']);
  }
}
