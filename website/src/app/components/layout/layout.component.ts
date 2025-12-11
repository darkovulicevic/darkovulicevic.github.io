import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from '../parts/me/me.component';
import { CopyComponent } from '../parts/copy/copy.component';
import { InfoComponent } from '../parts/info/info.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MeComponent, CopyComponent, InfoComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    isLoading: boolean = true;

    constructor() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
}
