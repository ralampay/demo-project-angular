import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Employee Directory';
  message: string = 'Hello world!';

  handleSampleEvent(payload: string): void {
    console.log(`handleSampleEvent(${payload}) in app.component`);
    this.message = payload;
  }
}