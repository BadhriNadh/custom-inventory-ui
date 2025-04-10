import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutDialogComponent } from './logout-dialog.component';

describe('LogoutCardComponent', () => {
  let component: LogoutDialogComponent;
  let fixture: ComponentFixture<LogoutDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutDialogComponent]
    });
    fixture = TestBed.createComponent(LogoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
