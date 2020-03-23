import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {Route, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
    //NgbModule.forRoot(),
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})


export class AppModule { }