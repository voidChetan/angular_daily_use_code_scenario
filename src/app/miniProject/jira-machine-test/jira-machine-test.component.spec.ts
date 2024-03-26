import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraMachineTestComponent } from './jira-machine-test.component';

describe('JiraMachineTestComponent', () => {
  let component: JiraMachineTestComponent;
  let fixture: ComponentFixture<JiraMachineTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraMachineTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraMachineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
