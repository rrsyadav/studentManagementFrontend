import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService, Student } from '../student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  newName = '';
  newRollNo = '';

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  addStudent() {
    if (this.newName && this.newRollNo) {
      this.studentService.addStudent(this.newName, this.newRollNo).subscribe(() => {
        this.newName = '';
        this.newRollNo = '';
        this.fetchStudents();
      });
    }
  }
}
