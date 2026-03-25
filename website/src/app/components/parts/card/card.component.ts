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
}
