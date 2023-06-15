import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInlineEditingComponent } from './topics/inlineEditing/basic-inline-editing/basic-inline-editing.component';
import { AdvanceInlineEditingComponent } from './topics/inlineEditing/advance-inline-editing/advance-inline-editing.component';
import { ParkingTicketToolComponent } from './miniProject/parking-ticket-tool/parking-ticket-tool.component';
import { TodoAppComponent } from './miniProject/todo-app/todo-app.component';
import { MultipleDataFormComponent } from './topics/multiple-data-form/multiple-data-form.component';

const routes: Routes = [
  {
    path: 'basic-inlineEditing',
    component: BasicInlineEditingComponent
  },
  {
    path: 'advance-inlineEditing',
    component: AdvanceInlineEditingComponent
  },
  {
    path: 'parking-ticket',
    component: ParkingTicketToolComponent
  },
  {
    path: 'todo-app',
    component: TodoAppComponent
  }, 
  {
    path: 'Employee',
    component: MultipleDataFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
