import {Component} from '@angular/core';
import {CourseComponent} from './course.component';
import {CourseService} from '../../services/courses/course.service';

@Component({
  selector: 'courses',
  template: `
      <h2>{{ title }}</h2>
      <input #inputCourses (keyup.enter)="addCourse(inputCourses.value) ; inputCourses.value=''" type="text" autoGrow />
      <button (click)="addCourse(inputCourses.value) ; inputCourses.value=''">Add Course!</button>
      <button (click)="removeCourse(inputCourses.value) ; inputCourses.value=''">Remove Course!</button>
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
  inputText: string;
  courses: string[];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
    this.title ="Courses";
  }

  addCourse(courseToAdd: string) {
    let index = this.courses.indexOf(courseToAdd);
    if (index > 0) {
      // Already existing -> do nothing
      console.log("This course already exists : " + courseToAdd);
    } else {
      this.courses.push(courseToAdd);
      this.updateCoursesTitle();
    }
  }

  removeCourse(courseToRemove: string) {
    let index = this.courses.indexOf(courseToRemove);
    if (index > 0) {
      // Existing -> we remove it
      this.courses.splice(index, 1);
      this.updateCoursesTitle();
    } else {
      console.log("This course does not exist : " + courseToRemove);
    }
  }

  updateCoursesTitle() {
    this.title = "There are " + this.courses.length + " Courses : ";
  }
}
