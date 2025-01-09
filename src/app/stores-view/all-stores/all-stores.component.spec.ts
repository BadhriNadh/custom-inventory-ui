import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStoresComponent } from './all-stores.component';

describe('AllStoresComponent', () => {
  let component: AllStoresComponent;
  let fixture: ComponentFixture<AllStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllStoresComponent]
    });
    fixture = TestBed.createComponent(AllStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
