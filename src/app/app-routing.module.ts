import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/All-contacts/add-contact/add-contact.component';
import { ContactsComponent } from './components/All-contacts/contacts/contacts.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path:'', redirectTo:'/login', pathMatch:'full'
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"register", component: RegisterComponent
  }
  ,{
    path:"contacts", component: ContactsComponent, 
    canActivate:[AuthGuard]
  },
  {
    path:"dashboard", component:DashboardComponent ,  
    canActivate:[AuthGuard]
  },
  {
    path:"add", component:AddContactComponent , 
     canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
