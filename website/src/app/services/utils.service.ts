import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    private readonly _reduced_motion_query: string = '(prefers-reduced-motion: reduce)';
    private _section_observer?: IntersectionObserver;
    private _ignore_observer_until: number = 0;

    private readonly _active_section_subject: BehaviorSubject<string> = new BehaviorSubject<string>('about');
    public readonly activeSection$ = this._active_section_subject.asObservable();

    public scrollTo(sectionId: string): void {
        if (!sectionId) return;

        const target = document.getElementById(sectionId);
        if (!target) return;

        const behavior = this._prefers_reduced_motion() ? 'auto' : 'smooth';
        const right = typeof window !== 'undefined' && window.matchMedia('(min-width: 900px)').matches
            ? (document.querySelector('.this_right') as HTMLElement | null)
            : null;

        this._active_section_subject.next(sectionId);
        this._ignore_observer_until = performance.now() + 700;

        if (right) {
            const pr = right.getBoundingClientRect();
            const tr = target.getBoundingClientRect();
            const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
            const top = right.scrollTop + tr.top - pr.top - margin;
            right.scrollTo({ top: Math.max(0, top), behavior });
        } else {
            target.scrollIntoView({ behavior, block: 'start' });
        }
    }

    public observeSections(container: HTMLElement | null, sectionIds: string[]): void {
        this.disconnectSectionObserver();

        if (sectionIds.length === 0) return;

        this._section_observer = new IntersectionObserver(
            (entries) => {
                if (performance.now() < this._ignore_observer_until) return;

                const visible_entries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible_entries.length === 0) return;

                const id = (visible_entries[0].target as HTMLElement).id;
                if (!id) return;

                this._active_section_subject.next(id);
            },
            {
                root: container,
                threshold: [0.2, 0.35, 0.5, 0.7],
                rootMargin: '-10% 0px -55% 0px'
            }
        );

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) this._section_observer?.observe(section);
        });
    }

    public disconnectSectionObserver(): void {
        this._section_observer?.disconnect();
        this._section_observer = undefined;
    }

    private _prefers_reduced_motion(): boolean {
        return typeof window !== 'undefined'
            && window.matchMedia(this._reduced_motion_query).matches;
    }
}
