import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilsService {
    private readonly active = new BehaviorSubject('about');
    readonly activeSection$ = this.active.asObservable();
    private until = 0;

    scrollTo(id: string): void {
        const el = document.getElementById(id);
        if (!el) return;

        this.active.next(id);
        this.until = Date.now() + 1000;

        const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        const root = matchMedia('(min-width: 900px)').matches
            ? document.querySelector('.this_right') as HTMLElement | null
            : null;

        if (!root) {
            el.scrollIntoView({ behavior, block: 'start' });
            return;
        }

        const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
        const panel = root.getBoundingClientRect();
        const target = el.getBoundingClientRect();
        root.scrollTo({ top: Math.max(0, root.scrollTop + target.top - panel.top - margin), behavior });
    }

    updateActive(ids: string[], root: HTMLElement | null): void {
        if (Date.now() < this.until) return;

        const last = ids.at(-1)!;
        const atBottom = root
            ? root.scrollTop + root.clientHeight >= root.scrollHeight - 1
            : scrollY + innerHeight >= document.documentElement.scrollHeight - 1;

        let id = last;
        if (!atBottom) {
            const first = document.getElementById(ids[0]);
            const marker = (root?.getBoundingClientRect().top ?? 0)
                + (first ? parseFloat(getComputedStyle(first).scrollMarginTop) || 0 : 0);
            id = ids[0];
            for (const sectionId of ids) {
                const section = document.getElementById(sectionId);
                if (section && section.getBoundingClientRect().top <= marker) id = sectionId;
            }
        }

        if (this.active.value !== id) this.active.next(id);
    }
}
