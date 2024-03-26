import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-using-form-builder',
  templateUrl: './using-form-builder.component.html',
  styleUrls: ['./using-form-builder.component.css']
})
export class UsingFormBuilderComponent {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl(''),
      username: new FormControl('')
    })
  }


}
