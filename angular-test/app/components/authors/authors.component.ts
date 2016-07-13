import {Component} from '@angular/core';
import {AuthorComponent} from './author.component';
import {AuthorService} from '../../services/authors/author.service';
import {AutoGrowDirective} from '../../directives/auto-grow.directive';

@Component({
  selector: 'authors',
  template: `
            <h2>{{title}}</h2>
            <input #inputAuthors type="text" autoGrow />
            <ul>
              <li *ngFor = "let author of authors">
              This is an author with name {{author}}
              </li>
            </ul>
            `,
  providers: [AuthorService],
  directives: [AutoGrowDirective]
})
export class AuthorsComponent {
    authors : AuthorComponent;
    title: string;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
    this.title ="Authors";
  }
}
