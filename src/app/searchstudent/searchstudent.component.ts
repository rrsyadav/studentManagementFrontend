import { Component } from '@angular/core';                                                          
import { StudentService } from '../student.service';


@Component({
  selector: 'app-searchstudent',
  imports: [],
  templateUrl: './searchstudent.component.html',
  styleUrl: './searchstudent.component.css'
})


export class SearchstudentComponent {

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  fetchStudents(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

}
