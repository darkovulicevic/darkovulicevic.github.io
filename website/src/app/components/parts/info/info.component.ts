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
        this.utilsService.observeSections(null, ['about', 'experience', 'certificates', 'projects']);
    }

    public ngOnDestroy(): void {
        this.utilsService.disconnectSectionObserver();
    }
}
