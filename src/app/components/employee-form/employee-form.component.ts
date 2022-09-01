import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: Employee = {
    firstName: "",
    lastName: "",
    isRegular: false
  };

  @Output() employeeSaved: EventEmitter<Employee> = new EventEmitter<Employee>();

  firstName: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleSave(): void {
    console.log("Saving employee data...");
    console.log(this.employee);

    let o = {...this.employee};

    this.employeeSaved.emit(o);

    this.employee.firstName = "";
    this.employee.lastName = "";
    this.employee.isRegular = false;
  }

}
