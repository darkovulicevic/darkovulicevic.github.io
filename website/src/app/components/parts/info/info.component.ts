import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

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
    private readonly desktop = matchMedia('(min-width: 900px)').matches;

    constructor(
        private utilsService: UtilsService,
        private host: ElementRef<HTMLElement>
    ) { return; }

    @HostListener('scroll')
    onScroll(): void {
        if (this.desktop) this.sync();
    }

    @HostListener('window:scroll')
    onWindowScroll(): void {
        if (!this.desktop) this.sync();
    }

    ngAfterViewInit(): void {
        this.sync();
    }

    private sync(): void {
        this.utilsService.updateActive(SECTION_IDS, this.desktop ? this.host.nativeElement : null);
    }
}
