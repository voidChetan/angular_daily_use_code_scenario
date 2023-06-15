import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-ticket-tool',
  templateUrl: './parking-ticket-tool.component.html',
  styleUrls: ['./parking-ticket-tool.component.css']
})
export class ParkingTicketToolComponent implements OnInit{

  parkedVehicles: any []= [];
  parkingObj :any = {
    "license_plate": "",
    "mobileNo": "",
    "vehicle_type": "",
    "entry_date": "2023-05-20T12:12:47.483Z",
    "ticket_amount": ""
  };
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loadAllParking();
  }
  assignVehicleType(vehicleType: string) {
    this.parkingObj.vehicle_type = vehicleType;
  }
  setAmount(rate:number) {
    this.parkingObj.ticket_amount = rate;
  }
  loadAllParking() {
    this.http.get("http://onlinetestapi.gerasim.in/api/ParkingTicket/GetAllParkings").subscribe((res: any)=> { 
      const sortedData =   res.data.sort().reverse(); 
      this.parkedVehicles = sortedData; 
    })
  }

  createParking() {
    this.http.post("http://onlinetestapi.gerasim.in/api/ParkingTicket/AppParking", this.parkingObj).subscribe((res: any)=> { 
      if(res.result) {
        alert("Parking Created");
        this.loadAllParking();
        this.resetForm();
      } else {
        alert(res.message)
      }
    })
  }
  resetForm() {
    this.parkingObj = {
      "license_plate": "",
      "mobileNo": "",
      "vehicle_type": "",
      "entry_date": "2023-05-20T12:12:47.483Z",
      "ticket_amount": ""
    };
  }
  markOut(license_plate: string) {
    this.http.get("http://onlinetestapi.gerasim.in/api/ParkingTicket/MarkOut?license_plate="+license_plate ).subscribe((res: any)=> { 
      if(res.result) {
        alert("Vehicle Mared Out");
        this.loadAllParking();
        this.resetForm();
      } else {
        alert(res.message)
      }
    })
  }
}
