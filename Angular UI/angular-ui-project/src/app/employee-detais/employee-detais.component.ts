import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detais',
  templateUrl: './employee-detais.component.html',
  styleUrls: ['./employee-detais.component.css']
})
export class EmployeeDetaisComponent {

id: number;
employee: Employee;

  constructor(private route: ActivatedRoute,private employeeService : EmployeeService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    })
  }

}
