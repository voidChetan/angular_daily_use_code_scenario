import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {
  
  @Input() columnHeadingArray:any [] = [];
  @Input() gridData: any[] = [];
  @Input() isAction: boolean = false;

  @Output() editCallback = new EventEmitter<any>();
  @Output() deleteCallback = new EventEmitter<any>();

  onEdit(data: any) {
    debugger;
    this.editCallback.emit(data)
  }

  onDelete(data: any) {
    debugger;
    this.deleteCallback.emit(data);
  }
}
