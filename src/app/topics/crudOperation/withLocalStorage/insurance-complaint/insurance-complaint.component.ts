import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-complaint',
  templateUrl: './insurance-complaint.component.html',
  styleUrls: ['./insurance-complaint.component.css']
})
export class InsuranceComplaintComponent implements OnInit {


  complaintArray: any[] = [];
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    const localData = localStorage.getItem("complaintList");
    if (localData != null) {
      this.complaintArray = JSON.parse(localData);
    }

  }
  onEdit(id: number) {
    this.router.navigate(['/AddComplaint', id])
  }
  onDelete(id: number) {
    debugger;
    const index = this.complaintArray.findIndex(m => m.id == id);
    this.complaintArray.splice(index, 1);
    localStorage.setItem("complaintList", JSON.stringify(this.complaintArray));
  }

}
