import {Component} from '@angular/core';
import {AuthorComponent} from './author.component';
import {AuthorService} from '../../services/authors/author.service';

@Component({
  selector: 'authors',
  template: `
            <h2>{{title}}</h2>
            <ul>
              <li *ngFor = "let author of authors">
              This is an author with name {{author}}
              </li>
            </ul>
            `,
  providers: [AuthorService]
})
export class AuthorsComponent {
    authors : AuthorComponent;
    title: string;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
    this.title ="Authors";
  }
}
