import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  todoItem: string = '';
  toDoItems: string []= [];
  filteredArray: string [] = [];
  ngOnInit(): void { 
    const localData = localStorage.getItem("todoItems");
    if(localData !== null) {
      this.toDoItems = JSON.parse(localData);
      this.filteredArray =  JSON.parse(localData);
    }
  }
  onAdd() {
    this.toDoItems.unshift(this.todoItem);
    localStorage.setItem('todoItems', JSON.stringify(this.toDoItems));
    this.todoItem = '';
  }
  onRemove(itemName: string) {
    const itemIndex =  this.toDoItems.findIndex(m=>m == itemName);
    this.toDoItems.splice(itemIndex,1);
    localStorage.setItem('todoItems', JSON.stringify(this.toDoItems));
  }

  onFilterItems(value: any) {
    debugger; 
     this.filteredArray = this.toDoItems.filter((m: any)=>m.toLowerCase().startsWith(value.toLowerCase())); 
  }
}
