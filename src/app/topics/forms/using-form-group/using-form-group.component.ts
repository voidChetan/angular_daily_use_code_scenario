import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-using-form-group',
  templateUrl: './using-form-group.component.html',
  styleUrls: ['./using-form-group.component.css']
})
export class UsingFormGroupComponent {

  usersArray: any[]=[];
  userForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl('',[Validators.required,Validators.minLength(10)]),
    username: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private http: HttpClient){
    this.getAllUser();
  }

  getAllUser() {
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((res:any)=>{
      this.usersArray =  res;
    })
  }
  onEdit(id: number) {
    this.http.get("https://jsonplaceholder.typicode.com/users/"+ id).subscribe((res:any)=>{
      this.userForm = new FormGroup({
        id: new FormControl(res.id),
        name: new FormControl(res.name),
        username: new FormControl(res.username),
        email: new FormControl(res.email)
      });
    })
  }

  onSaveUser() {
    debugger;
    const obj = this.userForm.value;
    this.http.post('https://jsonplaceholder.typicode.com/users',obj).subscribe((res:any)=>{
      alert('User Created')
    })
  }

}
