import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  todoItems: any [] = [];
  filteredItems: any [] = [];
  todoObject: any = {
    itemId:'',
    todoText: ''
  };

  ngOnInit(): void {
    debugger;
    const localData =  localStorage.getItem("todoList");
    if(localData!= null) {
      this.todoItems =  JSON.parse(localData);
      this.filteredItems =  this.todoItems;
    }
  }
  addTodoItem() {
    debugger;
    this.todoObject.itemId =  this.todoItems.length + 1;
    this.todoItems.unshift(this.todoObject);
    localStorage.setItem("todoList",  JSON.stringify(this.todoItems));
    this.todoObject = {
      itemId:'',
      todoText: ''
    };
  }
  isCheckboxChecked() {
    const checkedCount =  this.todoItems.filter(m=>m.isChecked == true).length;
    if(checkedCount !== 0) {
      return true;
    } else {
      return false;
    }
  }

  deleteCheckItems() {
    const checkRecords =  this.todoItems.filter(m=>m.isChecked == true);
    for (let index = 0; index < checkRecords.length; index++) {
      const checkRecord=  this.todoItems.findIndex(m=>m.itemId == checkRecords[index].itemId);
      this.todoItems.splice(checkRecord,1) 
    }
    localStorage.setItem("todoList",  JSON.stringify(this.todoItems)); 
  }

  onFilter(search: string) {
    debugger;
    const filterData =  this.todoItems.filter(m=>m.todoText.toLowerCase().startsWith(search.toLowerCase()));
    if(filterData.length!==0) {
      this.filteredItems =  filterData;
    } else {
      if (this.todoObject.todoText == '') {
        this.filteredItems =  this.todoItems;
      }
    }
  }

}
