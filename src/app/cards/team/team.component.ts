import { Component, Input } from '@angular/core';
import { Team } from 'src/app/Models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  @Input() member!: Team;

}
