import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private apiUrl = 'http://localhost:8080/psicologia/person'; // Ajusta la URL según tu endpoint

  constructor(private http: HttpClient) { }

  guardarPersona(persona: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, persona);
  }
}
