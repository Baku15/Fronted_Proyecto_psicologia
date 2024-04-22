import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerDepartmentService {
private apiUrl = 'http://localhost:8080/psicologia/career_department'; // Ajusta la URL según tu endpoint

  constructor(private http: HttpClient) { }
  guardarCareerDepartment(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
