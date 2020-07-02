import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {UserServiceService} from './user-service.service';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './jwtAuth/auth.guard';
import { AuthInterctor } from './jwtAuth/auth.interctor';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterctor,
    multi: true
  },AuthGuard,UserServiceService],
  bootstrap: [AppComponent]
})
 
export class AppModule { }
