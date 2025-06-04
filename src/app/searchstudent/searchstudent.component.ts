import { Component } from '@angular/core';                                                          
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 



@Component({
  selector: 'app-searchstudent',
  imports: [FormsModule,CommonModule],
  templateUrl: './searchstudent.component.html',
  styleUrl: './searchstudent.component.css'
})


export class SearchstudentComponent {

  students: any[] = [];
  showStudents: boolean = false;

  searchTerm: string = '';
  searchedStudent: any = null;
  searchNotFound: boolean = false;

  constructor(private studentService: StudentService) {}

  fetchStudents(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }



  searchStudent() {
    this.studentService.searchStudent(this.searchTerm).subscribe(
      (data: any) => {  // <-- Add explicit type here
        if (data) {
          this.searchedStudent = data;
          this.searchNotFound = false;
        } else {
          this.searchedStudent = null;
          this.searchNotFound = true;
        }
      },
      (error: any) => {  // <-- Add explicit type here
        this.searchedStudent = null;
        this.searchNotFound = true;
      }
    );
  }
  

}
