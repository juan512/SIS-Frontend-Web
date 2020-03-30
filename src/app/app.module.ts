import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {Route, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PacientesComponent } from './pacientes/pacientes.component';
import { LisPacientesComponent } from './lis-pacientes/lis-pacientes.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'listadoPacientes', component: LisPacientesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PacientesComponent,
    LisPacientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    HttpClientModule
    //NgbModule.forRoot(),
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})


export class AppModule { }
