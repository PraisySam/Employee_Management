import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[] | any;

  constructor(private employesService : EmployeeService, private router: Router){
  }

  ngOnInit(): void{
    this.getEmployees();
  }

  private getEmployees(){
    this.employesService.getEmployeesList().subscribe(response => {
      this.employees= response;
      console.log(response);
 });
  }
  updateEmployee(id : number){
    this.router.navigate(['update-employee',id])

  }
  
  deleteEmployee(id:number){

    this.employesService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();
    })

  }
  
  viewEmployee(id : number){
    this.router.navigate(['employee-details',id])

  }
}

    /*this.employees=[
      {
        "id":1,
        "FirstName": "SAI",
        "LastName":"RAJ",
        "emailId":"Sai@gmail.com"
      },
      {
        "id":2,
        "FirstName": "PRAISY",
        "LastName":"S",
        "emailId":"Praisy@gmail.com"
      }
    ]


  }*/


