import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5000/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    console.log("Fetching employees...");
    return this.http.get<Employee[]>(this.apiUrl);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    if(!employee.id) {
      return this.http.post<Employee>(this.apiUrl, employee, httpOptions);
    } else {
      // update: PUT /employees/:id
      const url = `${this.apiUrl}/${employee.id}`;
      return this.http.put<Employee>(url, employee, httpOptions);
    }
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.delete<Employee>(url);
  }
}
