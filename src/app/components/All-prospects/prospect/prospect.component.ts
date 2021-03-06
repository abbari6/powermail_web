import { ApiService } from '../../../services/testapi/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddProspectComponent } from '../add-prospect/add-prospect.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css'],
})
export class ProspectComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'labelName',
    'labelDescription',
    'prospectedLabelled',
    'outreachCampagins',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(AddProspectComponent, {
      width: '30%',
    }).afterClosed().subscribe(val =>{
      if(val === 'save'){
        this.getAllProducts();
      }
    })
  }

  editField(row: any) {
    this.dialog.open(AddProspectComponent, {
      width:'30%',
      data: row
    }).afterClosed().subscribe(val =>{
      if(val === 'update'){
        this.getAllProducts();
      }
    })
  }

  deleteProduct(id: number){
    this.api.deleteProduct(id).subscribe({
      next:(res)=>{
        alert("Product Deleted");
        this.getAllProducts();
      },error:()=>{
        alert("error while deleting")
      }
    }) 
  }

  getAllProducts() {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
       // alert('error');
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
