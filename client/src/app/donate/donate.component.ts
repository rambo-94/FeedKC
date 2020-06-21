import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {ApiserviceService} from "../apiservice.service";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor(public router:Router,public rou:ActivatedRoute,public fb:FormBuilder,public api:ApiserviceService) { }


  details=this.fb.group({
    'dish': ['', Validators.required],
    'date': ['', Validators.required],
    'contactName': ['', Validators.required],
    'location': ['', Validators.required],
    'contactNumber': ['', Validators.required]
  });
  hide = true;

  ngOnInit() {
  }

  detailsSub(donateDetails:NgForm) {

    console.log(donateDetails);

    this.api.saveDonation(donateDetails)
      .subscribe(data => {
          console.log(data);
          if(data.msg == "Details saved Successfully") {
            this.router.navigate(['../'],{relativeTo:this.rou});
          }else{
            this.hide = false;
          }
        }
      )};


}
