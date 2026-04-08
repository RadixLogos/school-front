import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/alunos`);
  }

  getProfessores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/professores`);
  }

  getMaterias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/materias`);
  }

  getSituacao(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/alunos/${id}/situacao`);
  }
}