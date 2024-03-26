import { Component } from '@angular/core'; 

@Component({
  selector: 'app-adv-todo-app',
  templateUrl: './adv-todo-app.component.html',
  styleUrls: ['./adv-todo-app.component.css'], 
})
export class AdvTodoAppComponent {

  taskObj: Task;
  taskList: Task[] = [];
  originalTaskList: Task[] = [];
  tagsList: string [] = ['Work', 'Health','Market','Meeting','Calls','Personal', 'Defect','Story','Interview'];
  filterType: string = '';
  selectedTag: string = '';
  constructor() {
    this.taskObj  = new Task(); 
    const localData = localStorage.getItem('advTodoApp');
    if(localData != null) {
      this.taskList = JSON.parse(localData);
      this.originalTaskList =  this.taskList;
    }

  }

  setFilter(type) {
    this.filterType = type;
    this.selectedTag = '';
    if(this.filterType == 'showCompleted') {
      this.taskList =  this.originalTaskList.filter(m=>m.isComplete == true);
    } else {
      this.taskList =  this.originalTaskList;
    }
   

  }
  filterTag(tagName) {
     this.selectedTag = tagName;
     const filterData =  this.originalTaskList.filter((item)=>{ 
        return item.tags.includes(tagName) 
     });
     this.taskList = filterData;
  }
  createNewTask() { 
    const task = JSON.stringify(this.taskObj);
    const parseTask = JSON.parse(task);

    this.taskList.push(parseTask);
    this.originalTaskList =  this.taskList;
    localStorage.setItem('advTodoApp' , JSON.stringify(this.taskList));
  }
  onComplete() {
    debugger; 
    this.originalTaskList =  this.taskList;
    localStorage.setItem('advTodoApp' , JSON.stringify(this.taskList));
  }
  onRemove(index:number) {
    debugger; 
    this.taskList.splice(index, 1);
    this.originalTaskList =  this.taskList;
    localStorage.setItem('advTodoApp' , JSON.stringify(this.taskList));
  }

  getArrayFromCommaSeperatedString(value: string) : string[]{
    const arr = value.split(',')
    return arr
  }

}

export class Task {
  taskName: string;
  dueDate: string;
  tags: string;
  isComplete: boolean;
  constructor() {
    this.taskName = '';
    this.dueDate = '';
    this.tags  = '';
    this.isComplete = false;
  }
}
