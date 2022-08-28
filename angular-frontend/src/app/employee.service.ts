import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  private baseURL ="http://localhost:8080/SpringMVC/api/v1/employees";
  
  constructor(private httpClient : HttpClient) { }

  getEmployeesList():Observable<Employee[]>{  
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);

  }

  createEmployee(employee:Employee):Observable<object>{
    console.log(employee)
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id: number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:  number,employee: Employee): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(id:  number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}
