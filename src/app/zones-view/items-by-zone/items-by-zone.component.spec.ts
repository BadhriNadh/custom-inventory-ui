import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsByZoneComponent } from './items-by-zone.component';

describe('ItemsByZoneComponent', () => {
  let component: ItemsByZoneComponent;
  let fixture: ComponentFixture<ItemsByZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsByZoneComponent]
    });
    fixture = TestBed.createComponent(ItemsByZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
