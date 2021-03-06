import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthorizationService } from './services/authorization.service'; 
import { ItemService } from './services/item.service'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

export const firebaseConfig = {
    apiKey: "AIzaSyC8heDY8gLWVimIueXjKEk3mZ61REpwRAM",
    authDomain: "user-info-c8d62.firebaseapp.com",
    databaseURL: "https://user-info-c8d62.firebaseio.com",
    projectId: "user-info-c8d62",
    storageBucket: "user-info-c8d62.appspot.com",
    messagingSenderId: "623151662816"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [AuthorizationService,ItemService],
  bootstrap: [AppComponent]
})

export class AppModule { }
