import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, AboutComponent, ExperienceComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

}
