import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingFormGroupComponent } from './using-form-group.component';

describe('UsingFormGroupComponent', () => {
  let component: UsingFormGroupComponent;
  let fixture: ComponentFixture<UsingFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
