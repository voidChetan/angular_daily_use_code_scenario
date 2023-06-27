import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent {

  candidates: any[]=[];
  columnArray: any[]= [
    {fieldName: 'name', text: 'Cadidate Name'},
    {fieldName: 'contactNo', text: 'Mobile No'},
    {fieldName: 'email', text: 'Email'},
    {fieldName: 'education', text: 'Education'}
  ];
  constructor(private http: HttpClient){
    this.getAllCandidates();
  }

  getAllCandidates() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates").subscribe((res:any)=>{
      this.candidates = res.data;
    })
  }
  edit(item: any) {
    debugger;
  }
  delete(item: any) {
    debugger;
  }
}
