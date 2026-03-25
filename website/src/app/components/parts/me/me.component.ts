import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavComponent } from '../nav/nav.component';
import { UtilsService } from '../../../services/utils.service';

@Component({
    selector: 'app-me',
    standalone: true,
    imports: [CommonModule, NavComponent],
    templateUrl: './me.component.html',
    styleUrls: ['./me.component.scss']
})
export class MeComponent {
    constructor(private utilsService: UtilsService) { return; }

    public scroll(event: Event, sectionId: string): void {
        event.preventDefault();
        this.utilsService.scrollTo(sectionId);
    }
}
