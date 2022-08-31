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

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(id: number): void {
    this.deleteEvent.emit(id);
  }
}
