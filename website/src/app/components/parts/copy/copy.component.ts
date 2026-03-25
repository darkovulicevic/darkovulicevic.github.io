import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-copy',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './copy.component.html',
    styleUrls: ['./copy.component.scss']
})
export class CopyComponent {
    constructor() { return; }
}
