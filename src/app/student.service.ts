import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id?: number;
  sname: string;
  sroolno: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }

  addStudent(sname: string, sroolno: string): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/add/${sname}/${sroolno}`, {});
  }


  // Add this method:
  searchStudent(query: string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/search`, {
      params: { query }
    });
  }
}
