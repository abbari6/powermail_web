import { Component, OnInit } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { AddContactComponent } from '../../All-contacts/add-contact/add-contact.component';
@Component({
  selector: 'app-contacts-sub-header',
  templateUrl: './contacts-sub-header.component.html',
  styleUrls: ['./contacts-sub-header.component.css']
})
export class ContactsSubHeaderComponent implements OnInit {

  constructor(  
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    this.dialog.open(AddContactComponent,dialogConfig);
  }
}
