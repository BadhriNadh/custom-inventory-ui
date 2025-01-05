import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoDialogComponent } from './item-info-dialog.component';

describe('ItemInfoComponent', () => {
  let component: ItemInfoDialogComponent;
  let fixture: ComponentFixture<ItemInfoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInfoDialogComponent]
    });
    fixture = TestBed.createComponent(ItemInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
