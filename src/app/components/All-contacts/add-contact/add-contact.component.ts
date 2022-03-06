import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/services/contact/contacts.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  contactForm!: FormGroup;
  actionBtn: string = 'Save';
  actionHeading: string = 'Add new Contact'
  userId: any;
  constructor(
    private http: ContactsService,
    private dialogRef: MatDialogRef<AddContactComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any , 
    private token: TokenStorageService
  ) {
    this.userId = token.getUserid();
    console.log(this.userId);
    
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      user_id: [this.userId, Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      label: ['', Validators.required],
      label2: ['', Validators.required],
      label3: ['', Validators.required],
    });
    if (this.editData) {
      this.actionBtn = 'Update';
      this.actionHeading = "Update Contact"
      this.contactForm.controls['firstname'].setValue(this.editData.firstname);
      this.contactForm.controls['lastname'].setValue(this.editData.lastname);
      this.contactForm.controls['company'].setValue(this.editData.company);
      this.contactForm.controls['email'].setValue(this.editData.email);
      this.contactForm.controls['role'].setValue(this.editData.role);
      this.contactForm.controls['label'].setValue(this.editData.label);
      this.contactForm.controls['label2'].setValue(this.editData.label2);
      this.contactForm.controls['label3'].setValue(this.editData.label3);
    }
  }
  addContact() {
    if (!this.editData) {
     
        this.http.addContact(this.contactForm.value).subscribe({
          next: (res) => {
            alert('Contact added succesfully');
            this.contactForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Something went wrong');
          },
        });
      } else {
        this.updateContact();
      }
    
  }
  updateContact() {

    this.http
      .putContact(this.editData.id)
      .subscribe({
        next: (res) => {
          alert('Contact updated succesfully');
          this.contactForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert('Something went wrong');
        },
      });
  }
}
