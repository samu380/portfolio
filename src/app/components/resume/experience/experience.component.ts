import { Component } from '@angular/core';
import { EXPERIENCE } from '../mock-expierince';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public experience = EXPERIENCE;
}
