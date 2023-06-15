import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDataFormComponent } from './multiple-data-form.component';

describe('MultipleDataFormComponent', () => {
  let component: MultipleDataFormComponent;
  let fixture: ComponentFixture<MultipleDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
