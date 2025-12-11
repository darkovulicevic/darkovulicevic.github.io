import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],

})
export class CardComponent {

    @Input() public date: string = '';
    @Input() public pos: string = '';
    @Input() public desc: string = '';
    @Input() public skills: Array<any> = [];

    constructor() { return; }

}
