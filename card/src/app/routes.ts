import { Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AuthGuard} from './jwtAuth/auth.guard';




export const appRoutes: Routes = [
    {  path: '',  component: UserComponent,pathMatch: 'full'},

    {
        path: 'signup', component: RegisterComponent
       },
    {
        path: 'login', component: LoginComponent
       
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
   






];