import {Component} from '@angular/core';
import {CoursesComponent} from './gui/courses/courses.component';
import {AuthorsComponent} from './gui/authors/authors.component';
import {LevelsComponent} from './gui/levels/levels.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular 3</h1>
              <courses></courses>
              <authors></authors>
              <levels></levels>`,
    directives: [CoursesComponent, AuthorsComponent, LevelsComponent]
})
export class AppComponent { }
