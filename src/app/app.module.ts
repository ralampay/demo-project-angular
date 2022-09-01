import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListOfEmployeesComponent } from './components/list-of-employees/list-of-employees.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AboutComponent } from './pages/about/about.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { EmployeeShowComponent } from './components/employee-show/employee-show.component';

const appRoutes: Routes = [
  { path: '', component: MainContainerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'employees/:id', component: EmployeeShowComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListOfEmployeesComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    ToggleButtonComponent,
    EmployeeFormComponent,
    AboutComponent,
    MainContainerComponent,
    EmployeeShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
