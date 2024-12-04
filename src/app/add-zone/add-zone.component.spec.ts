import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZoneComponent } from './add-zone.component';

describe('AddComponent', () => {
  let component: AddZoneComponent;
  let fixture: ComponentFixture<AddZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddZoneComponent]
    });
    fixture = TestBed.createComponent(AddZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
