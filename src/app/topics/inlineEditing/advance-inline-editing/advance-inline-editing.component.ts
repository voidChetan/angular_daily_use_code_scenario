import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-advance-inline-editing',
  templateUrl: './advance-inline-editing.component.html',
  styleUrls: ['./advance-inline-editing.component.css']
})
export class AdvanceInlineEditingComponent {
 
  userArray: any []= []; 
  constructor(private http: HttpClient ){

  }
  ngOnInit(): void {
    this.loadAllUser();
  }
  

  loadAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any)=>{
      this.userArray = res; 
    })
  }
  onEdit(item: any) {
    item.isEdit = true;
  }
  validateField(item: any) {
    if(item !== '') {
      return false;
    } else {
      return true;
    }
  }
  validateUserName(userName: string) {
    if(userName  === '') {
      return "Required";
    } else {
      if(userName.length >= 3) {
        return "";
      } else {
        return "min 3 char";
      }
    }
  }
 validateForm(obj:any) {
  if(obj.name != '' && obj.username != '' && obj.phone != '') {
    return false;
  } else {
     return true;
  }
 }
 onCancel(item: any) {
  item.isEdit = false;
 }
}

