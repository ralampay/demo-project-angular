import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() editEvent: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() refreshEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  handleDelete(): void {
    this.employeeService.deleteEmployee(this.employee).subscribe((emp) => {
      this.deleteEvent.emit(this.employee.id);
      // this.refreshEvent.emit();
    })
  }

  handleEdit(): void {
    this.editEvent.emit(this.employee);
  }
}
