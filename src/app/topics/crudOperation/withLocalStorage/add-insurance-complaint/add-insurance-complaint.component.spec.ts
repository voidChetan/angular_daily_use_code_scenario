import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsuranceComplaintComponent } from './add-insurance-complaint.component';

describe('AddInsuranceComplaintComponent', () => {
  let component: AddInsuranceComplaintComponent;
  let fixture: ComponentFixture<AddInsuranceComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInsuranceComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInsuranceComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
