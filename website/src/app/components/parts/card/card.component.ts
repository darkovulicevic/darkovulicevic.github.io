import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input() public date: string = '';
    @Input() public pos: string = '';
    @Input() public desc: string = '';
    @Input() public skills: Array<any> = [];

    constructor() { return; }

}
