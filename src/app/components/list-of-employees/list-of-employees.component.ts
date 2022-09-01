import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit {
  isOpen: boolean = false;
  @Input() message: string = "";
  @Input() listOfEmployees: Employee[];
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() editEvent: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() refreshEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(id: number): void {
    this.deleteEvent.emit(id);
  }

  handleEdit(employee: Employee) {
    this.editEvent.emit(employee);
  }

  handleRefresh() {
      this.refreshEvent.emit();
  }
}
