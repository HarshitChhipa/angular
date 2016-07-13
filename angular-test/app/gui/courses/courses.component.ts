import {Component} from '@angular/core';
import {CourseComponent} from './course.component';
import {CourseService} from '../../services/courses/course.service';

@Component({
  selector: 'courses',
  template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">
          {{course}}
        </li>
      </ul>
            `,
    providers:[CourseService]
})
export class CoursesComponent {

  title: string;
  courses: CourseComponent;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
    this.title ="Courses";
  }
}
