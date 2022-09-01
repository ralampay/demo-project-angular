import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  handleSave(): void {
    console.log("Saving employee data...");
    console.log(this.employee);

    let o = {...this.employee};

    this.employeeService.saveEmployee(o).subscribe((emp) => {
      this.employeeSaved.emit(emp);

      this.employee.id = undefined;
      this.employee.firstName = "";
      this.employee.lastName = "";
      this.employee.isRegular = false;
    })
  }

}
