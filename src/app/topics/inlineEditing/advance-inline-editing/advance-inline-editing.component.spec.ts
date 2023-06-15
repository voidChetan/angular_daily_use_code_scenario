import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceInlineEditingComponent } from './advance-inline-editing.component';

describe('AdvanceInlineEditingComponent', () => {
  let component: AdvanceInlineEditingComponent;
  let fixture: ComponentFixture<AdvanceInlineEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceInlineEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceInlineEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
