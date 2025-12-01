import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Management System';
  selectedStudent: Student | null = null;

  onEdit(student: Student) {
    this.selectedStudent = { ...student };
  }

  onClearSelection() {
    this.selectedStudent = null;
  }
}
