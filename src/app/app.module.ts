import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';
import { RegistroComponent } from './registro/registro.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './core/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';

const appRoutes  : Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'home',
    //canActivate : [AuthguardGuard],
    component : HomeComponent
  },
  {
    path : 'registro',
    component : RegistroComponent
  }/*,
  {
    path : 'userprofile',
    component : UserProfileComponent
  }*/
  
];

var firebaseConfig = {
  apiKey: "AIzaSyAqzm_Zxm_FCJKzwzRM2t3wX72tXNcSsC0",
  authDomain: "birdhaus-d54bb.firebaseapp.com",
  databaseURL: "https://birdhaus-d54bb.firebaseio.com",
  projectId: "birdhaus-d54bb",
  storageBucket: "birdhaus-d54bb.appspot.com",
  messagingSenderId: "651431602729"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    UserProfileComponent,
    AlimentacionComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    FormsModule ,
    CoreModule 
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
