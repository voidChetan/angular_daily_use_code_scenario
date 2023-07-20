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
import { PortComponent } from './miniProject/port/port.component';
import { InsuranceComplaintComponent } from './topics/crudOperation/withLocalStorage/insurance-complaint/insurance-complaint.component';
import { AddInsuranceComplaintComponent } from './topics/crudOperation/withLocalStorage/add-insurance-complaint/add-insurance-complaint.component';
import { LogicalUserRegistrationComponent } from './logical/logical-user-registration/logical-user-registration.component';
import { StudRegReactiveFormComponent } from './logical/stud-reg-reactive-form/stud-reg-reactive-form.component';
import { FileUploadComponent } from './topics/file-upload/file-upload.component';
 
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
        path: 'port',
        component: PortComponent
      },
      {
        path: 'Logical-registration',
        component: LogicalUserRegistrationComponent
      },
      {
        path: 'reg-reactive',
        component: StudRegReactiveFormComponent
      },
      {
        path: 'InsuranceComplaint',
        component: InsuranceComplaintComponent
      },
      {
        path: 'AddComplaint',
        component: AddInsuranceComplaintComponent
      },
      {
        path: 'fileUpload',
        component: FileUploadComponent
      },
      {
        path: 'AddComplaint/:id',
        component: AddInsuranceComplaintComponent
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
