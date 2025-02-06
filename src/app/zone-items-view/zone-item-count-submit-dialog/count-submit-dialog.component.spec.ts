import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSubmitDialogComponent } from './count-submit-dialog.component';

describe('CountSubmitDialogComponent', () => {
  let component: CountSubmitDialogComponent;
  let fixture: ComponentFixture<CountSubmitDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountSubmitDialogComponent]
    });
    fixture = TestBed.createComponent(CountSubmitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
