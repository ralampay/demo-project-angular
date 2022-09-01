import { 
    Component,
    Input, 
    OnInit 
} from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  employee: Employee = {
    firstName: "",
    lastName: "",
    isRegular: false
  }

  @Input() listOfEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    console.log("ngOnInit()");
    // Call our backend server
    // On response, load listOfEmployees

    //this.listOfEmployees = this.employeeService.getEmployees();

    this.employeeService.getEmployees().subscribe((employees) => {
      this.listOfEmployees = employees;
    })
  }

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
  }

  handleEmployeeSaved(employee: Employee) {
    console.log(employee);

    let updated = false;

    for(let i = 0; i < this.listOfEmployees.length; i++) {
      let tempId = this.listOfEmployees[i].id;

      if(tempId && tempId == employee.id) {
        this.listOfEmployees[i] = employee;
        updated = true;
      }
    }

    if(!updated) {
      this.listOfEmployees.push(employee);
    }
  }

  handleEdit(employee: Employee) {
    this.employee = employee;
  }

  handleRefresh() {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.listOfEmployees = employees;
    })
  }

}
