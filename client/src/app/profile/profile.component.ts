import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {ApiserviceService} from "../apiservice.service";
import {Router} from "@angular/router";
import {DrviewComponent} from "../drview/drview.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: string;

  constructor(private fb: FormBuilder, public api: ApiserviceService, public router: Router, public dr: DrviewComponent) {
  }


  saveForm = this.fb.group({
    'username': ['', Validators.required],
    'email': ['', Validators.required],
    'address': ['', Validators.required]
  });
  savingMsg = "Click on save to update your credentials";
  display = true;
  chpassword: any;
  passMsg="none";
  passMsg1 ="none";

  ngOnInit() {
    this.user = this.dr.getUsername();
    this.api.getDemographics(this.user).subscribe(data => {
      if (data == 'An error occurred') {

        console.log("Error while retrieving the details during page load")
      } else {
        console.log(data);
        this.saveForm.patchValue({
          'username': this.user,
          'email': data.email,
          'address': data.address

        })
      }
    });


  }

  onSave(value: NgForm) {
    console.log(value);
    let data={"username":this.user,"newUsername": this.saveForm.get("username").value,"newmail":this.saveForm.get("email").value,"newaddress":this.saveForm.get("address").value
    };
    this.dr.setUsername(this.saveForm.get("username").value);
    this.api.updatedDemog(data).subscribe(data=>{


      if(data.msg=="Data updated successfully"){

        this.savingMsg = "Details saved successfully";

      }else{

        this.savingMsg = "Error submitting details...Please try again";

      }

    });
  }

  passwordCh() {

    let cred={"username":this.user,"newPassword":this.chpassword};
    this.api.changePassword(cred).subscribe(data=>{

      if(data.msg=="Password updated successfully"){
        this.passMsg="block";

      }
      else {

        this.passMsg1="block";

      }

    });


  }
}
