import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-jira-board',
  templateUrl: './jira-board.component.html',
  styleUrls: ['./jira-board.component.css']
})
export class JiraBoardComponent {

  ticketsArray: any[] = [
    {
      ticketId: "Jira-003",
      ticketName: "Layout Page",
      status: "In Progress"
    },
    {
      ticketId: "Jira-005",
      ticketName: "Reset Password",
      status: "In Progress"
    },
    {
      ticketId: "Jira-008",
      ticketName: "Employee List",
      status: "In Progress"
    },
    {
      ticketId: "Jira-001",
      ticketName: "User Registration",
      status: "To Do"
    },
    {
      ticketId: "Jira-002",
      ticketName: "User Login",
      status: "To Do"
    },
    {
      ticketId: "Jira-006",
      ticketName: "Role Login",
      status: "To Do"
    },
    {
      ticketId: "Jira-009",
      ticketName: "Department Portal",
      status: "To Do"
    },
    {
      ticketId: "Jira-004",
      ticketName: "Forgot Password",
      status: "Done"
    },
    {
      ticketId: "Jira-007",
      ticketName: "Create Employee",
      status: "Done"
    },
    {
      ticketId: "Jira-010",
      ticketName: "Employee Details",
      status: "Done"
    }
  ];
  currentItem: any;

  myName: string;
  constructor(private cdf: ChangeDetectorRef){}

  ChangeVal() {
    this.myName = "Aditya"; 
    this.cdf.detectChanges();
  }

  filterTickets(status: string) {
    return this.ticketsArray.filter(m=>m.status == status);
  }

  onDragStart(item: any) {
    console.log('onDragStart')
    this.currentItem = item;
  }

  onDrop(event: any, status: string) {
    console.log('onDrop');
    event.preventDefault();
    const record = this.ticketsArray.find(m=>m.ticketId == this.currentItem.ticketId);
    if(record!= undefined) {
      record.status = status;
    }
    this.currentItem  = null;
  }
  onDragOver(event: any) {
    console.log('onDragOver')
    event.preventDefault();
  }
   
}
