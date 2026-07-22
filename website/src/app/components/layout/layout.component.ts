import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy } from '@angular/core';

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
export class LayoutComponent implements OnDestroy {
    private static LOADING_TIMEOUT_MS: number = 450;
    private static PORTRAIT_SRC: string = 'assets/media/7c2a9f.jpg';

    public isLoading: boolean = true;
    public scrollProgress: number = 0;
    public mx: number = 0;
    public my: number = 0;
    public spotX: string = '50%';
    public spotY: string = '35%';
    public spotOn: number = 0;
    public portraitBg: string = 'none';

    private rafId: number = 0;
    private reduceMotion: boolean = false;
    private portraitObjectUrl: string = '';

    constructor() {
        if (typeof window !== 'undefined') {
            this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            this.loadPortrait();
        }

        setTimeout((): void => {
            this.isLoading = false;
        }, LayoutComponent.LOADING_TIMEOUT_MS);

        return;
    }

    public ngOnDestroy(): void {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }

        if (this.portraitObjectUrl) {
            URL.revokeObjectURL(this.portraitObjectUrl);
            this.portraitObjectUrl = '';
        }
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

    @HostListener('document:pointermove', ['$event'])
    public onPointerMove(event: PointerEvent): void {
        if (this.reduceMotion || this.isLoading || window.innerWidth < 769) {
            return;
        }

        cancelAnimationFrame(this.rafId);
        this.rafId = requestAnimationFrame((): void => {
            const nx = (event.clientX / window.innerWidth) * 2 - 1;
            const ny = (event.clientY / window.innerHeight) * 2 - 1;
            this.mx = Math.max(-1, Math.min(1, nx));
            this.my = Math.max(-1, Math.min(1, ny));
            this.spotX = `${(event.clientX / window.innerWidth) * 100}%`;
            this.spotY = `${(event.clientY / window.innerHeight) * 100}%`;
            this.spotOn = 1;
        });
    }

    @HostListener('document:mouseleave')
    public onPointerLeave(): void {
        this.spotOn = 0;
        this.mx = 0;
        this.my = 0;
    }

    public progressTransform(): string {
        const percent = this.scrollProgress * 100;
        return `scaleX(${percent / 100})`;
    }

    private loadPortrait(): void {
        fetch(LayoutComponent.PORTRAIT_SRC)
            .then((response: Response): Promise<Blob> => {
                if (!response.ok) {
                    throw new Error('Portrait fetch failed');
                }
                return response.blob();
            })
            .then((blob: Blob): void => {
                this.portraitObjectUrl = URL.createObjectURL(blob);
                this.portraitBg = `url("${this.portraitObjectUrl}")`;
            })
            .catch((): void => {
                this.portraitBg = 'none';
            });
    }
}
