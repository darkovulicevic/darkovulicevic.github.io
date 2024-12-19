import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    public scrollTo(sectionId: string): void {
        if (!sectionId) return;
        const target = document.getElementById(sectionId);
        if (!target) return;
        if (sectionId === 'about') {
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
