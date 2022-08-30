import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit {
  isOpen: boolean = false;
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

  constructor() { }

  ngOnInit(): void {
  }

}
