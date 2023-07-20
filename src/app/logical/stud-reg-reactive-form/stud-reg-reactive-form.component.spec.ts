import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudRegReactiveFormComponent } from './stud-reg-reactive-form.component';

describe('StudRegReactiveFormComponent', () => {
  let component: StudRegReactiveFormComponent;
  let fixture: ComponentFixture<StudRegReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudRegReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudRegReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
