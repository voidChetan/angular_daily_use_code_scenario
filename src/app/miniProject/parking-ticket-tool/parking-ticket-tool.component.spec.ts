import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTicketToolComponent } from './parking-ticket-tool.component';

describe('ParkingTicketToolComponent', () => {
  let component: ParkingTicketToolComponent;
  let fixture: ComponentFixture<ParkingTicketToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingTicketToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingTicketToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
