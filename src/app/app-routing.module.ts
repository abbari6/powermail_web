import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { AddProspectComponent } from './components/All-prospects/add-prospect/add-prospect.component';
import { ProspectComponent } from './components/All-prospects/prospect/prospect.component';
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
    path:'', redirectTo:'dashboard', pathMatch:'full'
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"register", component: RegisterComponent
  }
  ,{
    path:"contacts", component: ContactsComponent, 
    //canActivate:[AuthGuard]
  },
  {
    path:"dashboard", component:DashboardComponent ,  
    //canActivate:[AuthGuard]
  },
  {
    path:"add", component:AddContactComponent , 
     //canActivate:[AuthGuard]
  },
  {
    path: 'prospect',
    component: ProspectComponent,
    //  canActivate:[AuthGuard]
  },
  {
    path: 'addprospect',
    component: AddProspectComponent,
    //  canActivate:[AuthGuard]
  },{
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  { 
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
