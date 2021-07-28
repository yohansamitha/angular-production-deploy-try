import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses;
  title;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.title = 'List Of Courses '+this.courses.length;
  }
}
