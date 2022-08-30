import { 
  Component, 
  OnInit,
  Input 
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

  constructor() { }

  ngOnInit(): void {
  }

}
