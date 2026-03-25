import { AsyncPipe, CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { UtilsService } from '../../../services/utils.service';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [CommonModule, NgFor, NgClass, AsyncPipe],
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    public readonly sections: Array<{ id: string; label: string }> = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'projects', label: 'Projects' }
    ];

    public readonly activeSection$ = this.utilsService.activeSection$;

    constructor(private utilsService: UtilsService) { return; }

    public scroll(event: Event, sectionId: string): void {
        event.preventDefault();

        if (!sectionId) return;

        this.utilsService.scrollTo(sectionId);
    }
}
