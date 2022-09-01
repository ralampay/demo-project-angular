import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee-show',
  templateUrl: './employee-show.component.html',
  styleUrls: ['./employee-show.component.scss']
})
export class EmployeeShowComponent implements OnInit {
  id: any;

  employee: Employee = {
    firstName: "",
    lastName: "",
    isRegular: false,
  }

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployee(this.id).subscribe((emp) => {
      this.employee = emp;
    });
  }
}