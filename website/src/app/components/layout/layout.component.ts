import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

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
    private static LOADING_TIMEOUT_MS: number = 450;

    public isLoading: boolean = true;
    public scrollProgress: number = 0;

    constructor() {
        setTimeout((): void => {
            this.isLoading = false;
        }, LayoutComponent.LOADING_TIMEOUT_MS);

        return;
    }

    @HostListener('window:scroll')
    public onWindowScroll(): void {
        const root = document.documentElement;
        const maxScroll = root.scrollHeight - window.innerHeight;
        if (maxScroll <= 0) {
            this.scrollProgress = 0;
            return;
        }
        this.scrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    }

    public progressTransform(): string {
        const percent = this.scrollProgress * 100;
        return `scaleX(${percent / 100})`;
    }
}
