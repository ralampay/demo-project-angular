import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';

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
}
