import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Employee Directory';
  message: string = 'Hello world!';
  @Input() listOfEmployees: any[] = [
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
}