import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsByVendorComponent } from './items-by-vendor.component';

describe('ItemsByVendorComponent', () => {
  let component: ItemsByVendorComponent;
  let fixture: ComponentFixture<ItemsByVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsByVendorComponent]
    });
    fixture = TestBed.createComponent(ItemsByVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
