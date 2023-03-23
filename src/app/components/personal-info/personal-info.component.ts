import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() desc: string = '';

  constructor(public router: Router) {}
}
