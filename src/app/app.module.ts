import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { BasicInlineEditingComponent } from './topics/inlineEditing/basic-inline-editing/basic-inline-editing.component';
import { AdvanceInlineEditingComponent } from './topics/inlineEditing/advance-inline-editing/advance-inline-editing.component';
import { ParkingTicketToolComponent } from './miniProject/parking-ticket-tool/parking-ticket-tool.component';
import { TodoAppComponent } from './miniProject/todo-app/todo-app.component'; 
import { ProductListComponent } from './miniProject/shoppingApp/product-list/product-list.component';
import { CheckoutComponent } from './miniProject/shoppingApp/checkout/checkout.component';
import { MultipleDataFormComponent } from './topics/multiple-data-form/multiple-data-form.component';
import { AlertComponent } from './reusable/alert/alert.component';
import { CandidatesComponent } from './topics/candidates/candidates.component';
import { MyTableComponent } from './reusable/my-table/my-table.component';
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
import { JiraMachineTestComponent } from './miniProject/jira-machine-test/jira-machine-test.component';
import { JiraBoardComponent } from './logical/jira-board/jira-board.component';
import { UsingFormGroupComponent } from './topics/forms/using-form-group/using-form-group.component';
import { UsingFormBuilderComponent } from './topics/forms/using-form-builder/using-form-builder.component';
import { CustomInterceptor } from './services/custom.interceptor';
import { MovieBookingComponent } from './logical/movie-booking/movie-booking.component';
import { MovieSeatBookingComponent } from './logical/movie-seat-booking/movie-seat-booking.component';
import { AdvTodoAppComponent } from './miniProject/adv-todo-app/adv-todo-app.component';

@NgModule({
  declarations: [
    AppComponent, 
    BasicInlineEditingComponent,
    AdvanceInlineEditingComponent,
    ParkingTicketToolComponent,
    TodoAppComponent, 
    ProductListComponent,
    CheckoutComponent,
    MultipleDataFormComponent,
    AlertComponent,
    CandidatesComponent,
    MyTableComponent,
    ToDoItemsComponent,
    LoginComponent,
    LayoutComponent,
    PortComponent,
    InsuranceComplaintComponent,
    AddInsuranceComplaintComponent,
    LogicalUserRegistrationComponent,
    StudRegReactiveFormComponent,
    FileUploadComponent,
    JiraMachineTestComponent,
    JiraBoardComponent,
    UsingFormGroupComponent,
    UsingFormBuilderComponent,
    MovieBookingComponent,
    MovieSeatBookingComponent,
    AdvTodoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
