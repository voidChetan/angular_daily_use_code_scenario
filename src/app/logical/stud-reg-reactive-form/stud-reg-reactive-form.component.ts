import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stud-reg-reactive-form',
  templateUrl: './stud-reg-reactive-form.component.html',
  styleUrls: ['./stud-reg-reactive-form.component.css']
})
export class StudRegReactiveFormComponent implements OnInit, AfterViewInit {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    middleName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    fullName: new FormControl(''),
    dob: new FormControl('',[Validators.required, Validators.minLength(2)]),
    age: new FormControl('',[Validators.required, Validators.minLength(2)]),
    licenceNo: new FormControl(''),
    country: new FormControl('',[Validators.required, Validators.minLength(2)]),
    state: new FormControl(''),
    identityType: new FormControl(''),
    cardNo: new FormControl('')
  })

  ngOnInit(): void {
    this.callFun()
    this.studentForm.valueChanges.subscribe(res=>{
      debugger;
    })
    this.studentForm.controls['firstName'].valueChanges.subscribe(res=>{
      debugger;
      this.createFullName();
    })
  
    this.studentForm.controls['lastName'].valueChanges.subscribe(res=>{
      debugger;
      this.createFullName();
    })
  }
  ngAfterViewInit(): void {
    this.studentForm.controls['dob'].valueChanges.subscribe(res=>{
      debugger;
      const selectedDob = new Date(res);
      const dobYear = selectedDob.getFullYear();
      const curerntYear =  new Date().getFullYear(); 
      const age = curerntYear - dobYear;
      this.studentForm.controls['age'].setValue(age)
      if(age > 18) {
        this.studentForm.controls['licenceNo'].setValidators(Validators.required);
      } else {
        this.studentForm.controls['licenceNo'].removeValidators(Validators.required);
      }
    })
    this.studentForm.controls['country'].valueChanges.subscribe(res=>{
      if(res === 'India') {
        this.studentForm.controls['state'].setValidators(Validators.required);
      } else {
        this.studentForm.controls['state'].removeValidators(Validators.required);
      }
    })
    this.studentForm.controls['identityType'].valueChanges.subscribe(res=>{
      if(res == 'Aadhar Card') {
        this.studentForm.controls['cardNo'].setValidators(Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$'))
      } else {
        this.studentForm.controls['cardNo'].setValidators(Validators.pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$'))
      }
    })
  }
  callFun() {
    this.studentForm.controls['middleName'].valueChanges.subscribe(res=>{
      debugger;
      this.createFullName();
    })
  }

  createFullName() {
    debugger;
    const fullName = this.studentForm.controls['firstName'].value + ' ' + this.studentForm.controls['middleName'].value + ' ' +
              this.studentForm.controls['lastName'].value; 

    this.studentForm.controls['fullName'].setValue(fullName);
    if(this.studentForm.controls['fullName'].value.trim() !== '') {
      this.studentForm.controls['fullName'].disable();
    } else {
      this.studentForm.controls['fullName'].enable();
    }
  }
}
