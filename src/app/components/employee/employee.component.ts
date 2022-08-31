import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input() id: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() isRegular: boolean;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(): void {
    this.deleteEvent.emit(this.id);
  }
}
