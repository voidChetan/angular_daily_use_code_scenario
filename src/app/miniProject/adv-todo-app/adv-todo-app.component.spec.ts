import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvTodoAppComponent } from './adv-todo-app.component';

describe('AdvTodoAppComponent', () => {
  let component: AdvTodoAppComponent;
  let fixture: ComponentFixture<AdvTodoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvTodoAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvTodoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
