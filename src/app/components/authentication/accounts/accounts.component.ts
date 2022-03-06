import { Component, OnInit } from '@angular/core';
declare var gapi: any;
declare var auth2: any;
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accountService: any;

  constructor(  ) { }

  ngOnInit(): void {
  }
  connectGoogleAccount() {
    
    auth2.grantOfflineAccess({ 'redirect_uri': "postmessage", 'prompt': 'consent select_account' })
      .then(response => this.signInCallback(response), closed => { });
}
signInCallback(authResult: any): void {
  console.log("AuthCode "+authResult['code']);

}

 

}
