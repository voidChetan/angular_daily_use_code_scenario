import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { EmployeList, Employee } from 'src/app/class/employee';

@Component({
  selector: 'app-multiple-data-form',
  templateUrl: './multiple-data-form.component.html',
  styleUrls: ['./multiple-data-form.component.css']
})
export class MultipleDataFormComponent implements OnInit, OnDestroy {

  columnArray: any []= [
    {fieldName: 'name', text: 'Cadidate Name'},
    {fieldName: 'contactNo', text: 'Mobile No'},
    {fieldName: 'state', text: 'State'},
    {fieldName: 'designation', text: 'Designation'}
  ];
  isNewDiv: boolean = false;
  employeeObj: Employee = new Employee();
  employeeList: EmployeList[]=[];
  relativeList: any[]=[];
  empRelativeObj : any = {
    "relativeId": 0,
    "name": "",
    "relation": "",
    "age": 0,
    "empId": 0
  };
  isTableLoader: boolean = true;
  isApiCallInProgress: boolean = false;

  alertMessage: string = '';
  showAlert: boolean= false;

  public myName: string = "Chetan";

  $myUser : Observable<any[]> = of([]);

  mySubscription: Subscription [] = []; 
  usersArrya: any [] = [];
  constructor(private http: HttpClient) {
     
  }
  ngOnInit(): void {
    this.getAllEmployee();
   // this.loadUser();
    this.$myUser =  this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }
  // loadUser() {
  //   this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //     this.usersArrya =  res;
  //   })
  // }
  addRelative() {
    const strobj = JSON.stringify(this.empRelativeObj);
    const obj = JSON.parse(strobj);
    this.relativeList.unshift(obj);
    this. empRelativeObj = {
      "relativeId": 0,
      "name": "",
      "relation": "",
      "age": 0,
      "empId": 0
    };
  }
  getAllEmployee() {
    this.isTableLoader = true;
    this.mySubscription.push(this.http.get("http://onlinetestapi.gerasim.in/api/Mock/GetAllEmployees").subscribe((res: any) => {
      this.employeeList = res.data;
      setTimeout(() => {
        this.isTableLoader = false;
      }, 0);
     })
    )
  }
  getEmployee(empid:number) {
    this.mySubscription.push( this.http.get("http://onlinetestapi.gerasim.in/api/Mock/GetEmployeeById?id="+empid).subscribe((Res:any)=>{
      debugger;
      this.employeeObj = Res.data;
      this.relativeList = this.employeeObj.mockEmpRelatives;
      this.isNewDiv = true;
    })
    )
  }
  saveEmployee() {
    if(!this.isApiCallInProgress) {
      this.isApiCallInProgress = true;
      this.employeeObj.mockEmpRelatives = this.relativeList;
      this.mySubscription.push( this.http.post("http://onlinetestapi.gerasim.in/api/Mock/CreateEmployee",this.employeeObj).subscribe((res: any)=>{
        this.isApiCallInProgress = false;
        if(res.result) {
          this.alertMessage = "Employee Created Successfully";
          this.showAlert =  true;
          this.getAllEmployee();
          //this.isNewDiv = false;
        } else {
          this.alertMessage = res.message;
          this.showAlert =  true;
        }
        setTimeout(() => {
          this.showAlert =  false;
        }, 0);
      })
      )
    } 
  }
  updateEmployee() {
    this.isApiCallInProgress = true;
    this.employeeObj.mockEmpRelatives = this.relativeList;
    const updateObj =  this.http.post("http://onlinetestapi.gerasim.in/api/Mock/UpdateEmployee",this.employeeObj).subscribe((res: any)=>{
      if(res.result) {
        alert(res.message)
        this.getAllEmployee();
        //this.isNewDiv = false;
      }
      this.isApiCallInProgress = false;
    })
    this.mySubscription.push(updateObj);
  }
  onDelete(id: number) {
    const isConfirm = confirm("Are You Sure Want to Delte");
    if(isConfirm) {
     const delebvSub = this.http.get("http://onlinetestapi.gerasim.in/api/Mock/DeleteEmployeeById?id="+id).subscribe((res: any)=>{
        if(res.result) {
          alert(res.message)
          this.getAllEmployee(); 
        }
        this.isApiCallInProgress = false;
      })
      this.mySubscription.push(delebvSub)
    } 
  } 

  ngOnDestroy(): void {
    debugger;
     this.mySubscription.forEach(element => {
      debugger;
      element.unsubscribe()
    });
  }

}
