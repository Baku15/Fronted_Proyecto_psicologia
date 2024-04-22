import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientTypeService {
private apiUrl = 'http://localhost:8080/psicologia/patient_type'; // Ajusta la URL según tu endpoint

  constructor(private http: HttpClient) { }
  guardarPatientType(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  }
