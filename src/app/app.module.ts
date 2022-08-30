import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOfEmployeesComponent } from './components/list-of-employees/list-of-employees.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfEmployeesComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
