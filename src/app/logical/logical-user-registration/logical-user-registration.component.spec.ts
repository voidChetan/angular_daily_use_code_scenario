import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalUserRegistrationComponent } from './logical-user-registration.component';

describe('LogicalUserRegistrationComponent', () => {
  let component: LogicalUserRegistrationComponent;
  let fixture: ComponentFixture<LogicalUserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicalUserRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicalUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
