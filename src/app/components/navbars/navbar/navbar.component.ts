import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountsComponent } from '../../accounts/accounts.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private dialog: MatDialog
  ) {  }

  ngOnInit(): void {}
  openDialog() {
    
    this.dialog.open(AccountsComponent,{
         width:'30%',
         height:'27%'
  }).afterClosed().subscribe(val=>{
    if(val==='save'){
     
    }
  })

  }

signinButton()
{
  // auth2.grantOfflineAccess().then(signInCallback);
}
// signInCallback(authResult: any): void {

//   if (authResult['code']) {
//       const user_id: string = this.auth.getUserID;

//       this.accountService.connectGoogleAccount({ user_id: user_id, g_account_auth_code: authResult['code'] })
//         .subscribe(response => {
//          //Success

         
//         }, error => {
//            //ERROR Google account could not be connected!
//         });

//     } else {
//       //ERROR  Google account could not be connected
//     }
//   }

}
