import { Component, Input } from '@angular/core';
import { Employee } from './interfaces/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Employee Directory';
  message: string = 'Hello world!';

  employee: Employee = {
    id: -1,
    firstName: "",
    lastName: "",
    isRegular: false
  }

  @Input() listOfEmployees: Employee[] = [
    {
      id: 1,
      firstName: "Raphael",
      lastName: "Alampay",
      isRegular: false
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Wick",
      isRegular: true
    },
    {
      id: 3,
      firstName: "Keanu",
      lastName: "Reeves",
      isRegular: true
    }
  ];

  handleDelete(id: number): void {
    /*
    let newList = [];

    for(let i = 0; i < this.listOfEmployees.length; i++) {
      let emp = this.listOfEmployees[i];

      if(emp.id != id) {
        newList.push(emp);
      }
    }

    this.listOfEmployees = newList;
    */

    this.listOfEmployees = this.listOfEmployees.filter((emp) => {
      return emp.id != id;
    })
  }

  handleSampleEvent(payload: string): void {
    console.log(`handleSampleEvent(${payload}) in app.component`);
    this.message = payload;
  }

  handleEmployeeSaved(employee: Employee) {
    console.log(employee);

    let updated = false;
    let maxId = -1;

    for(let i = 0; i < this.listOfEmployees.length; i++) {
      let tempId = this.listOfEmployees[i].id;

      if(tempId && tempId > maxId) {
        maxId = tempId;
      }

      if(tempId && tempId == employee.id) {
        this.listOfEmployees[i] = employee;
        updated = true;
      }
    }

    if(!updated) {
      employee.id = maxId + 1;
      this.listOfEmployees.push(employee);
    }
  }

  handleEdit(employee: Employee) {
      this.employee = employee;
  }
}