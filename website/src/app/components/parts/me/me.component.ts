import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent {

}
