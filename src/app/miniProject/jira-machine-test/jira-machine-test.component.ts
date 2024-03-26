import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CheckoutComponent } from '../shoppingApp/checkout/checkout.component';
import { ProductListComponent } from '../shoppingApp/product-list/product-list.component';
import { AuthGuard } from 'src/app/services/auth.guard';

@Component({
  selector: 'app-jira-machine-test',
  templateUrl: './jira-machine-test.component.html',
  template: '<div> </div>',
  styleUrls: ['./jira-machine-test.component.css'],
  styles: ['.primary{ color:red}'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  entryComponents: [CheckoutComponent, ProductListComponent] ,
  providers: [AuthGuard]
})
export class JiraMachineTestComponent {


  allNotes: any []= [];
  noteTypes: string [] = [];
  note: string = '';
  currentSelectedType: string = '';

  constructor() {
    this.noteTypes = [ 'What went well' , 'What Can Be Improved' ,'Start Doing' ,'Action Items' ]
  }
  ngOnInit(): void {
    this.noteTypes = [  ]
  }

  openNewNote(type: string) {
    this.currentSelectedType = type;
  }

  onSaveNote() {
    debugger;
    const noteObj  = {
      note: this.note,
      type:  this.currentSelectedType
    };
    this.allNotes.push(noteObj);
  }
  filterNotesByType(cuurentType: string) {
    return this.allNotes.filter(m=>m.type == cuurentType);
  }

}
