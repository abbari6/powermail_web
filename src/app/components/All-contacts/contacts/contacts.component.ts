import { Component, Inject, OnInit , ViewChild }  from '@angular/core';
import { map, filter, switchMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ContactsService } from 'src/app/services/contact/contacts.service';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddContactComponent } from '../add-contact/add-contact.component';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts: any;
searchkey: string;
listData: MatTableDataSource<any>;
displayedColumns: string[] = ['id','firstname', 'lastname','email','company','role','label','label-2','label-3','actions'];
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator
  constructor(  private http: ContactsService,  private dialog: MatDialog,
   ) { }

  ngOnInit(): void {
    
    this.getContactUsers();
  }
  getContactUsers()
  {
    this.http.contactUsers().subscribe((data:any)=>{
      this.contacts = data;
      this.listData = new MatTableDataSource(this.contacts);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })
  }
  onSearchClear(){
    this.searchkey="";
    this.applyFilter();
  }
  applyFilter(){
    this.listData.filter = this.searchkey.trim().toLowerCase();
  }
  openDialog() {
    
    this.dialog.open(AddContactComponent,{
         width:'30%',
  }).afterClosed().subscribe(val=>{
    if(val==='save'){
      this.getContactUsers();
    }
  })

  }
  editContact(row:any){
    this.dialog.open(AddContactComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getContactUsers();
      }
    })
  }

  deleteContact(id:number)
  {
    this.http.deleteContact(id).subscribe({
      next:(res)=>{
        alert("Contect deleted sucessfully")
        this.getContactUsers();
      },
      error:()=>{
        alert("Something went wrong")
      }
    })
  }

}


