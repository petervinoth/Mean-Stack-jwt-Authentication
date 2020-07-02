import { Injectable } from '@angular/core';
import { User } from './User.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private readonly URL:string='http://localhost:3000/api';

  selectedUser:User={
    fullName:'',
    email:'',
    password:''
  }
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  

  constructor( private https : HttpClient) { }

  postuser(user:User):Observable<User>{
    return this.https.post<User>(this.URL+'/register',user);
  }

  login(authCredentials){
    return this.https.post(this.URL+'/auth',authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.https.get(this.URL + '/profile');
  }
  setToken(token:string){
     localStorage.setItem('token', token);
  }
  


  getToken(){
    return localStorage.getItem('token');

  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  
}
