import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZoneDialogComponent } from './add-zone-dialog.component';

describe('AddComponent', () => {
  let component: AddZoneDialogComponent;
  let fixture: ComponentFixture<AddZoneDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddZoneDialogComponent]
    });
    fixture = TestBed.createComponent(AddZoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
