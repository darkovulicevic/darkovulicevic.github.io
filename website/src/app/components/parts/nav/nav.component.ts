import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../../services/utils.service';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    constructor(private utilsService: UtilsService) { }

    public scroll(sectionId: string): void {
        if (!sectionId) return;
        this.utilsService.scrollTo(sectionId);
    }
}
