import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RDashComponent } from './r-dash/r-dash.component';


const routes: Routes=[
  {path: 'dashboard', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'register' , component:RDashComponent},
  {path:'',redirectTo:'/login', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RDashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
