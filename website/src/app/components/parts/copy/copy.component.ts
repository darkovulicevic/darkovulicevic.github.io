import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';

type TFooterLink = { id: string; label: string };

@Component({
    selector: 'app-copy',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './copy.component.html',
    styleUrls: ['./copy.component.scss']
})
export class CopyComponent {
    public year: number = new Date().getFullYear();
    public sections: TFooterLink[] = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'projects', label: 'Projects' }
    ];

    constructor(private utilsService: UtilsService) { return; }

    public scrollTo(event: Event, id: string): void {
        event.preventDefault();
        this.utilsService.scrollTo(id);
    }

    public onIconMove(event: PointerEvent): void {
        if (window.innerWidth < 900) {
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const link = event.currentTarget as HTMLElement;
        const rect = link.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        link.style.transform = `translate(${(x * 0.28).toFixed(1)}px, ${(y * 0.28).toFixed(1)}px)`;
    }

    public onIconLeave(event: PointerEvent): void {
        const link = event.currentTarget as HTMLElement;
        link.style.transform = 'translate(0, 0)';
    }
}
