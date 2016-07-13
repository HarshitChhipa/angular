import {Component} from '@angular/core';
import {LevelComponent} from './level.component';
import {LevelService} from '../../services/levels/level.service';

@Component({
  selector: 'levels',
  template: `
            <h2>{{title}}</h2>
            <ul>
              <li *ngFor="let level of levels">
                {{level}}
              </li>
            </ul>
            `,
  providers: [LevelService]
})
export class LevelsComponent {
  levels: LevelComponent;
  title: string;

  constructor (levelService: LevelService) {
    this.levels = levelService.getLevels();
    this.title ="Levels";
  }
}
