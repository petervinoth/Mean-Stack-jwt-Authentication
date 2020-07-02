import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {Router} from '@angular/router';
import { User } from '../User.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

userDetails;

  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res=>{
        this.userDetails=res['user'];
      },
      err=>{
        console.log(err);
      }
    );

  }

  logout(){
    this.service.deleteToken();
    this.router.navigate(['/login']);
  }

}
