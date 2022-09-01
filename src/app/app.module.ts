import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListOfEmployeesComponent } from './components/list-of-employees/list-of-employees.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfEmployeesComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    ToggleButtonComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
