import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type TSkill = { name: string };

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() public date: string = '';
    @Input() public pos: string = '';
    @Input() public issuer: string = 'Enreach Labs';
    @Input() public desc: string = '';
    @Input() public skills: TSkill[] = [];
    @Input() public link: string | null = null;
    @Input() public showIssuerIcon: boolean = true;
    @Input() public fixedDateColumn: boolean = false;

    constructor() { return; }

    public onMove(event: PointerEvent): void {
        if (window.innerWidth < 1024) {
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const surface = event.currentTarget as HTMLElement;
        const rect = surface.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        surface.style.setProperty('--gx', `${x}%`);
        surface.style.setProperty('--gy', `${y}%`);
    }

    public onLeave(event: PointerEvent): void {
        const surface = event.currentTarget as HTMLElement;
        surface.style.setProperty('--gx', '50%');
        surface.style.setProperty('--gy', '40%');
    }
}
