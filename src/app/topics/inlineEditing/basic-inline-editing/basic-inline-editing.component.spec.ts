import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInlineEditingComponent } from './basic-inline-editing.component';

describe('BasicInlineEditingComponent', () => {
  let component: BasicInlineEditingComponent;
  let fixture: ComponentFixture<BasicInlineEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInlineEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicInlineEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
