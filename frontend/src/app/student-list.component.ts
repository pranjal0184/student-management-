import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  @Output() editStudent = new EventEmitter<Student>();
  message = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: () => {
        this.message = 'Error loading students.';
      }
    });
  }

  onEdit(student: Student) {
    this.editStudent.emit(student);
  }

  onDelete(id: string | undefined) {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this student?')) {
      return;
    }

    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        this.message = 'Student deleted successfully.';
        this.loadStudents();
      },
      error: () => {
        this.message = 'Error deleting student.';
      }
    });
  }
}
