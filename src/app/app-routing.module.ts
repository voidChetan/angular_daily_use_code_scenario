import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInlineEditingComponent } from './topics/inlineEditing/basic-inline-editing/basic-inline-editing.component';
import { AdvanceInlineEditingComponent } from './topics/inlineEditing/advance-inline-editing/advance-inline-editing.component';
import { ParkingTicketToolComponent } from './miniProject/parking-ticket-tool/parking-ticket-tool.component';
import { TodoAppComponent } from './miniProject/todo-app/todo-app.component';
import { MultipleDataFormComponent } from './topics/multiple-data-form/multiple-data-form.component';
import { CandidatesComponent } from './topics/candidates/candidates.component';
import { ToDoItemsComponent } from './miniProject/to-do-items/to-do-items.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '',
    component:LayoutComponent,
    children: [
      {
        path: 'basic-inlineEditing',
        component: BasicInlineEditingComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'advance-inlineEditing',
        component: AdvanceInlineEditingComponent,
        canActivate:[AuthGuard]
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
      }, 
      {
        path: 'candidates',
        component: CandidatesComponent
      }, 
      {
        path: 'todo-items',
        component: ToDoItemsComponent
      }
    ]

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
