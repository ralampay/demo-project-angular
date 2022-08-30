import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input() textOpen: string = "Open";
  @Input() textClose: string = "Close";
  @Input() isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  getText(): string{
    if(this.isOpen) {
      return this.textOpen;
    } else {
      return this.textClose;
    }
  }

  getClass(): string {
    if(this.isOpen) {
      return "btn btn-danger";
    } else {
      return "btn btn-success";
    }
  }
}
