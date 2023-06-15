export class Employee {
    empId: number;
    name: string;
    contactNo: string;
    email: string;
    city: string;
    state: string;
    pinCode?: string;
    designation: string;
    mockEmpRelatives: any [];
    constructor() {
        this.city = "";
        this.contactNo=  "";
        this.designation = "";
        this.email= "";
        this.email = "";
        this.empId= 0;
        this.mockEmpRelatives = [];
        this.name = ''; 
        this.state= '';
    }
}

export interface EmployeList { 
    empId: number;
    name: string;
    contactNo: string;
    email: string;
    city: string;
    state: string;
    pinCode?: string;
    designation: string;
}