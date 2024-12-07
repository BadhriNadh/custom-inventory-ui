import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorDialogComponent } from './add-vendor-dialog.component';

describe('AddVendorComponent', () => {
  let component: AddVendorDialogComponent;
  let fixture: ComponentFixture<AddVendorDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVendorDialogComponent]
    });
    fixture = TestBed.createComponent(AddVendorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
