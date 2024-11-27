import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDrawComponent } from './menu-draw.component';

describe('MenuDrawComponent', () => {
  let component: MenuDrawComponent;
  let fixture: ComponentFixture<MenuDrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDrawComponent]
    });
    fixture = TestBed.createComponent(MenuDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
