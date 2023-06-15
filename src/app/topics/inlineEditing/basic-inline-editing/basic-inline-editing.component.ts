import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-inline-editing',
  templateUrl: './basic-inline-editing.component.html',
  styleUrls: ['./basic-inline-editing.component.css']
})
export class BasicInlineEditingComponent implements OnInit {


  userArray: any[] = [];
  filteredUsers: any []= [];
  oldUserObj: any;
  searchText: string ='';
  constructor(private http: HttpClient ){

  }
  ngOnInit(): void {
    this.loadAllUser();
  }
  onNameSort() {
    const filteredData =  this.filteredUsers.sort((a: any, b: any) =>
    a.name.localeCompare(b.name));
    this.filteredUsers = filteredData;
  }

  filter(event: any) {
    this.filteredUsers = this.userArray.filter((searchData:any) => {
      let search = event;
      let values = Object.values(searchData);
      let flag = false
      values.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(search) > -1) {
          flag = true;
          return;
        }
      })
      if (flag) {
        return searchData
      }
    });
  }

  loadAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any)=>{
      this.userArray = res;
      this.filteredUsers= res;
    })
  }
  onEdit(userObj: any) {
    this.oldUserObj = JSON.stringify(userObj);
    this.userArray.forEach(element => {
      element.isEdit = false;
    });
    userObj.isEdit = true;
  }
  onAdd() {
    const obj = {
      "id": 1,
      "name": "",
      "username": "",
      "email": "",
      "phone": "",
      "website": "",
      "isEdit": true
    };
    this.userArray.unshift(obj);
  }
  onUpdate(userObj:any) {
    debugger;
    //write api call and send obj
  }
  onCancel(obj:any) {
    const oldObj =  JSON.parse(this.oldUserObj);
    obj.name = oldObj.name;
    obj.username=  oldObj.username;
    obj.isEdit = false;
  }

  onDelete(obj:any) {
    
  }
}
