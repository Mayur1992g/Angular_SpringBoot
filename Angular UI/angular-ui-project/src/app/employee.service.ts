import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  constructor(private htttpClient : HttpClient) { }

getEmployeeList(): Observable<Employee[]>{
  return this.htttpClient.get<Employee[]>(`${this.baseURL}`);
}

createEmployee(employee : Employee): Observable<Object>{
  return this.htttpClient.post(`${this.baseURL}` ,employee);
}

getEmployeeById(id : number) : Observable<Employee>{
  return this.htttpClient.get<Employee>(`${this.baseURL}/${id}`);
} 

updateEmployee(id : number , employee : Employee) : Observable<object>{
return this.htttpClient.put(`${this.baseURL}/${id}`,employee);
}

deleteEmployee(id : number) : Observable<object>{
  return this.htttpClient.delete(`${this.baseURL}/${id}`);
  }

}
