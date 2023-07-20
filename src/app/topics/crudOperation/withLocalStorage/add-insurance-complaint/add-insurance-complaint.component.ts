import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-insurance-complaint',
  templateUrl: './add-insurance-complaint.component.html',
  styleUrls: ['./add-insurance-complaint.component.css']
})
export class AddInsuranceComplaintComponent implements OnInit {

  complaintObj: any = {
    id: 1,
    complaintAgainst:'',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phoneno:'',
    email: '',
    complaint: ''
  };
  complaintArray: any[]=[];
  currentId: number = 0;

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe((res: any)=>{
      debugger;
      if(res.id) {
        this.currentId = res.id;
      }
    })
  }
  
  ngOnInit(): void {
    const localData =  localStorage.getItem('complaintList');
    if(localData !== null) {
      this.complaintArray = JSON.parse(localData);
      debugger;
      if(this.currentId !== 0) {
        const currentRecord =  this.complaintArray.find(m=> m.id ==this.currentId);
        if(currentRecord != undefined) {
          this.complaintObj =  currentRecord;
        }
      } 
    }
  }

  register() {
    debugger;
    const localData =  localStorage.getItem('complaintList');
    if(localData == null) { //if no record in local storage
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList", JSON.stringify(this.complaintArray));
    } else {// if data already present 
      const parseData = JSON.parse(localData);
      this.complaintObj.id = parseData.length + 1;  
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList", JSON.stringify(this.complaintArray));
    }
  }
  updateData() {
    debugger;
    const currentRecord =  this.complaintArray.find(m=> m.id ==this.currentId);
    if(currentRecord != undefined) {
       const index = this.complaintArray.findIndex(m=> m.id ==this.currentId);
       this.complaintArray.splice(index,1); 
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList", JSON.stringify(this.complaintArray));
    }
  }


}

