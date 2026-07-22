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
    constructor(
        private utilsService: UtilsService,
        private host: ElementRef<HTMLElement>
    ) { return; }

    @HostListener('scroll')
    public onScroll(): void {
        if (this.isDesktop()) {
            this.sync();
        }
    }

    @HostListener('window:scroll')
    public onWindowScroll(): void {
        if (!this.isDesktop()) {
            this.sync();
        }
    }

    @HostListener('window:resize')
    public onResize(): void {
        this.sync();
    }

    public ngAfterViewInit(): void {
        this.sync();
    }

    private isDesktop(): boolean {
        return matchMedia('(min-width: 900px)').matches;
    }

    private sync(): void {
        this.utilsService.updateActive(
            SECTION_IDS,
            this.isDesktop() ? this.host.nativeElement : null
        );
    }
}
