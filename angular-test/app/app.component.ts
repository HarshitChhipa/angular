import {Component} from '@angular/core';
import {CoursesComponent} from './components/courses/courses.component';
import {AuthorsComponent} from './components/authors/authors.component';
import {LevelsComponent} from './components/levels/levels.component';

@Component({
    selector: 'my-app',
    template: `<h1>List of Courses, Authors and Levels</h1>
              <courses></courses>
              <authors></authors>
              <levels></levels>`,
    directives: [CoursesComponent, AuthorsComponent, LevelsComponent]
})
export class AppComponent { }
