import { Component } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    selector: 'app-nav',
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
