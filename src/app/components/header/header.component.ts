import { 
  Component, 
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFormOpen: boolean = true;
  @Output() sampleEvent: EventEmitter<string> = new EventEmitter<string>()
  @Output() employeeSaved: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { 
    console.log("HeaderComponent generated...");
    console.log("HeaderComponent initialization complete...");
  }

  ngOnInit(): void {
  }

  handleSampleEvent(payload: string): void {
    console.log(`handleSampleEvent(${payload})`);
    this.isFormOpen = !this.isFormOpen;
    this.sampleEvent.emit(payload);
  }

  handleEmployeeSaved(employee: Employee) {
    console.log(employee);
    this.employeeSaved.emit(employee);
  }
}
