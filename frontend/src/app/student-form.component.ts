import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnChanges {
  @Input() student: Student | null = null;
  @Output() formSubmitted = new EventEmitter<void>();

  model: Student = {
    name: '',
    age: 0,
    course: '',
    email: ''
  };

  isEditMode = false;
  message = '';

  constructor(private studentService: StudentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['student'] && this.student) {
      this.model = { ...this.student };
      this.isEditMode = true;
      this.message = '';
    } else if (changes['student'] && !this.student) {
      this.resetForm();
    }
  }

  onSubmit() {
    if (!this.model.name || !this.model.course || !this.model.email || !this.model.age) {
      this.message = 'Please fill all fields.';
      return;
    }

    if (this.isEditMode && this.model._id) {
      this.studentService.updateStudent(this.model._id, this.model).subscribe({
        next: () => {
          this.message = 'Student updated successfully.';
          this.resetForm();
          this.formSubmitted.emit();
        },
        error: () => {
          this.message = 'Error updating student.';
        }
      });
    } else {
      this.studentService.addStudent(this.model).subscribe({
        next: () => {
          this.message = 'Student added successfully.';
          this.resetForm();
          this.formSubmitted.emit();
        },
        error: () => {
          this.message = 'Error adding student.';
        }
      });
    }
  }

  resetForm() {
    this.model = {
      name: '',
      age: 0,
      course: '',
      email: ''
    };
    this.isEditMode = false;
  }
}
