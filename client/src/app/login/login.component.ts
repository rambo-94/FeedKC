import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {ApiserviceService} from "../apiservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;
  constructor(public api:ApiserviceService,private fb:FormBuilder,public router:Router) { }
  loginForm=this.fb.group({
    'username': ['', Validators.required],
    'password': ['', Validators.required]
  });

  ngOnInit() {
  }


  onSubmit(value: NgForm) {
    console.log(value['username']);

    this.api.checkCred(value['username'])
      .subscribe(data => {
        console.log(data);
        if(data.password == value['password']) {
          if (data.donor==true){
            this.router.navigate(['/dashboard',value['username']]);
          }else{
            this.router.navigate(['/requester',value['username']]);

          }

        }
      });




  }
}



