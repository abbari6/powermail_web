import { ApiService } from './../../../services/testapi/api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-add-prospect',
  templateUrl: './add-prospect.component.html',
  styleUrls: ['./add-prospect.component.css'],
})
export class AddProspectComponent implements OnInit {
  productForm!: FormGroup;
  actionBtn: String = 'Save';
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dilaogRef: MatDialogRef<AddProspectComponent>
  ) {}
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      labelName: ['', Validators.required],
      labelDescription: ['', Validators.required],
      prospectedLabelled: ['', Validators.required],
      outreachCampagins: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.productForm.controls['labelName'].setValue(this.editData.labelName);

      this.productForm.controls['labelDescription'].setValue(
        this.editData.labelDescription
      );
      this.productForm.controls['prospectedLabelled'].setValue(
        this.editData.prospectedLabelled
      );
      this.productForm.controls['outreachCampagins'].setValue(
        this.editData.outreachCampagins
      );
    }
  }

  addProduct() {
    if (!this.editData) {
      this.api.postProduct(this.productForm.value).subscribe({
          next: (res) => {
            alert('product added succesful');
            this.productForm.reset();
            this.dilaogRef.close('save');
          },
          error: () => {
            alert('error while adding ');
          },
        });
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Update success');
        this.productForm.reset();
        this.dilaogRef.close('update');
      },
      error: () => {
        alert('error while update');
      },
    });
  }
}
