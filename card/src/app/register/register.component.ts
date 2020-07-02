import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserServiceService} from '../user-service.service';
import {User} from '../User.model';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  successmessage:boolean;
  errormessage:string;
 
  user:User=new User();

   constructor(private service:UserServiceService,private router:Router) { }
 
   ngOnInit(): void {
   }
 
 
   submit(form:NgForm){
     console.log(form.value);
     this.service.postuser(form.value).subscribe(
      res => {
        this.successmessage = true;
        setTimeout(() => this.successmessage = false, 4000);
        console.log(res);
        form.resetForm();
      },
      err => {
        if (err.status === 422) {
          this.errormessage = err.error.join('<br/>');
        }
        else
          this.errormessage = 'Enter correct Email & password min 4 Character!!';
      }
    );
  }
 log(){
   this.router.navigate(['/login']);
  
 }
 
 resetForm(form: NgForm) {
   this.service.selectedUser = {
     fullName: '',
     email: '',
     password: ''
   };
   form.resetForm();
   this.errormessage = '';
 }
}
 