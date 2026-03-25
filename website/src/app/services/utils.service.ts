import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    private readonly _reduced_motion_query: string = '(prefers-reduced-motion: reduce)';
    private _section_observer?: IntersectionObserver;

    private readonly _active_section_subject: BehaviorSubject<string> = new BehaviorSubject<string>('about');
    public readonly activeSection$ = this._active_section_subject.asObservable();

    public scrollTo(sectionId: string): void {
        if (!sectionId) return;

        const target = document.getElementById(sectionId);
        if (!target) return;

        target.scrollIntoView({
            behavior: this._prefers_reduced_motion() ? 'auto' : 'smooth',
            block: 'start'
        });

        this._active_section_subject.next(sectionId);
    }

    public observeSections(container: HTMLElement | null, sectionIds: string[]): void {
        this.disconnectSectionObserver();

        if (sectionIds.length === 0) return;

        this._section_observer = new IntersectionObserver(
            (entries) => {
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
