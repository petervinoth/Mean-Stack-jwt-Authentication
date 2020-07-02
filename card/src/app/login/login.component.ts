import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import {UserServiceService} from '../user-service.service';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model={
    email:'',
    password:''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  errormessage:string;

  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit() {
    if(this.service.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }
  iner(){
    this.router.navigate(['/signup']);
  }

  submit(form:NgForm){
    this.service.login(form.value).subscribe(
      res=>{
        this.service.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err=>{
       this.errormessage='username and password worng';
      }
    )
  }


}
