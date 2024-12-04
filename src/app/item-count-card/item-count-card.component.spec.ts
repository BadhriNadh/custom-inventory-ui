import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCountCardComponent } from './item-count-card.component';

describe('ItemCountCardComponent', () => {
  let component: ItemCountCardComponent;
  let fixture: ComponentFixture<ItemCountCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCountCardComponent]
    });
    fixture = TestBed.createComponent(ItemCountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
