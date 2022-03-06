import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountsComponent } from '../../authentication/accounts/accounts.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    this.dialog
      .open(AccountsComponent, {
        width: '30%',
        height: '27%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
        }
      });
  }
}
