import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemCardComponent } from './vendor-item-card.component';

describe('VendorItemCardComponent', () => {
  let component: VendorItemCardComponent;
  let fixture: ComponentFixture<VendorItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemCardComponent]
    });
    fixture = TestBed.createComponent(VendorItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
