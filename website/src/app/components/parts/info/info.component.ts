import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { UtilsService } from '../../../services/utils.service';

@Component({
    selector: 'app-info',
    standalone: true,
    imports: [CommonModule, AboutComponent, ExperienceComponent, CertificatesComponent, ProjectsComponent],
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements AfterViewInit, OnDestroy {
    constructor(private utilsService: UtilsService) { return; }

    public ngAfterViewInit(): void {
        const root = typeof window !== 'undefined' && window.matchMedia('(min-width: 900px)').matches
            ? (document.querySelector('.this_right') as HTMLElement | null)
            : null;
        this.utilsService.observeSections(root, ['about', 'experience', 'certificates', 'projects']);
    }

    public ngOnDestroy(): void {
        this.utilsService.disconnectSectionObserver();
    }
}
