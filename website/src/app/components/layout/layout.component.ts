import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    isLoading: boolean = true;

    constructor() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
}
