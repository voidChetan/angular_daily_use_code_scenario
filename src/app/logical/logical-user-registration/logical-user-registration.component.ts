import { Component } from '@angular/core';

@Component({
  selector: 'app-logical-user-registration',
  templateUrl: './logical-user-registration.component.html',
  styleUrls: ['./logical-user-registration.component.css']
})
export class LogicalUserRegistrationComponent {

  fullName: string = '';
  studentForm: any = {
    firstName: '',
    middleName:'',
    lastName: '',
    dob: '',
    age: '',
    licenceNo: '',
    education: '',
    twelthPer:'',
    twelthPassingYear:'',
    degree1stYrPer:'',
    degree2ndYrPer: '',
    degree3rdyrPer:'',
    degreePassingYr: '',
    otherEducation: '',
    otherEducationPer: '',
    otherEducationYr:'',
    startDate: '',
    endDate: ''
  }

  createFullNameByFirstName(firtsName: string) {
    this.fullName = firtsName + ' ' +  this.studentForm.middleName + ' '+ this.studentForm.lastName;
  }
  createFullNameByMiddleName(middleName: string) {
    this.fullName = this.studentForm.firstName + ' ' +  middleName + ' '+ this.studentForm.lastName;
  }
  createFullNameByLastName(lastName: string) {
    this.fullName = this.studentForm.firstName + ' ' +  this.studentForm.middleName + ' '+ lastName;
  }
  createFullName() {
    this.fullName = this.studentForm.firstName + ' ' +  this.studentForm.middleName + ' '+ this.studentForm.lastName;
  }

  onDobChange() {
    debugger;
    const selectedDob = new Date(this.studentForm.dob);
    const dobYear = selectedDob.getFullYear();
    const curerntYear =  new Date().getFullYear();
    this.studentForm.age =  curerntYear - dobYear;
  }

  onEductaionYrChange() {
    if(this.studentForm.startDate !='' && this.studentForm.endDate != '') {
      const startYear =  new Date(this.studentForm.startDate).getFullYear();
      const endYear =   new Date(this.studentForm.endDate).getMonth();
      const yearDiff =  endYear - startYear;
      if(yearDiff != 3) {
        alert("You are Not Eligible for this Course");
      }
    }  
  }
}
