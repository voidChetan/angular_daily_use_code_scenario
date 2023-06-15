import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-advance-inline-editing',
  templateUrl: './advance-inline-editing.component.html',
  styleUrls: ['./advance-inline-editing.component.css']
})
export class AdvanceInlineEditingComponent {

  userArray: any[] = [];
  filteredUsers: any []= [];
  oldUserObj: any;
  searchText: string ='';
  constructor(private http: HttpClient ){

  }
  ngOnInit(): void {
    this.loadAllUser();
  }
  

  loadAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any)=>{
      this.userArray = res;
      this.filteredUsers= res;
    })
  }
  onEdit(userObj: any) {
    debugger; 
  }
 
  onUpdate(userObj:any) {
    debugger; 
  }
  onCancel(obj:any) {
   
  }

  onDelete(obj:any) {
    
  }
}

