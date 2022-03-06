import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { AddProspectComponent } from './components/All-prospects/add-prospect/add-prospect.component';
import { ProspectComponent } from './components/All-prospects/prospect/prospect.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material-ui/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbars/navbar/navbar.component';
import { InnerNavbarComponent } from './components/navbars/inner-navbar/inner-navbar.component';
import { ContactsSubHeaderComponent } from './components/navbars/contacts-sub-header/contacts-sub-header.component';
import { ContactsComponent } from './components/All-contacts/contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddContactComponent } from './components/All-contacts/add-contact/add-contact.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AuthInterceptor } from './services/intercepter/auth.interceptor';
import { AccountsComponent } from './components/authentication/accounts/accounts.component';
import { SettingsNavComponent } from './components/navbars/settings-nav/settings-nav.component';

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    InnerNavbarComponent,
    ContactsSubHeaderComponent,
    ContactsComponent,
    AddContactComponent,
    LoginComponent,
    RegisterComponent,
    AccountsComponent,
    ProspectComponent,
    AddProspectComponent,
    ForgotPasswordComponent,
    SettingsNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddContactComponent],
})
export class AppModule {}
