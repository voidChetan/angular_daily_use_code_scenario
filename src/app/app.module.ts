import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
