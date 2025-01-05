import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllZonesComponent } from './all-zones.component';

describe('AllZonesComponent', () => {
  let component: AllZonesComponent;
  let fixture: ComponentFixture<AllZonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllZonesComponent]
    });
    fixture = TestBed.createComponent(AllZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
