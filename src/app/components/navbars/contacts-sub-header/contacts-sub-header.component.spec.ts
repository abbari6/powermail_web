import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSubHeaderComponent } from './contacts-sub-header.component';

describe('ContactsSubHeaderComponent', () => {
  let component: ContactsSubHeaderComponent;
  let fixture: ComponentFixture<ContactsSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsSubHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
