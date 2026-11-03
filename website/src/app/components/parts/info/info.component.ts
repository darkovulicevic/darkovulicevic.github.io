import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { UtilsService } from '../../../services/utils.service';

const SECTION_IDS = ['about', 'experience', 'certificates', 'projects'];

@Component({
    selector: 'app-info',
    standalone: true,
    imports: [CommonModule, AboutComponent, ExperienceComponent, CertificatesComponent, ProjectsComponent],
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements AfterViewInit {
    constructor(private utilsService: UtilsService) { return; }

    @HostListener('window:scroll')
    public onWindowScroll(): void {
        this.sync();
    }

    @HostListener('window:resize')
    public onResize(): void {
        this.sync();
    }

    public ngAfterViewInit(): void {
        this.sync();
    }

    private sync(): void {
        this.utilsService.updateActive(SECTION_IDS, null);
    }
}
