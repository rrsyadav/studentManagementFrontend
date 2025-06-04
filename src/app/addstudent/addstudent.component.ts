import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService, Student } from '../student.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css',
  standalone: true,
  

 
})
export class AddstudentComponent  implements OnInit{
  students: Student[] = [];
  newName = '';
  newRollNo = '';
  showStudents: boolean = false;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    //this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
      this.showStudents = true;
    });
  }


  hideStudents() {
    this.showStudents = false;
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
