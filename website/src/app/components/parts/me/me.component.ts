import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavComponent } from '../nav/nav.component';
import { UtilsService } from '../../../services/utils.service';

type TChar = { c: string; d: number };
type TWord = { letters: TChar[] };

@Component({
    selector: 'app-me',
    standalone: true,
    imports: [CommonModule, NavComponent],
    templateUrl: './me.component.html',
    styleUrls: ['./me.component.scss']
})
export class MeComponent {
    private readonly step: number = 0.02;
    private readonly base: number = 0.35;
    private tick: number = 0;

    public readonly ui: {
        title: TWord[];
        subtitle: TWord[];
        description: TWord[];
    };

    constructor(private utilsService: UtilsService) {
        this.ui = {
            title: this.takeWords('Darko Vulicevic'),
            subtitle: this.takeWords('JavaScript Developer driven by craft, consistency, and technical excellence'),
            description: this.takeWords('I build performant, accessible, and visually refined interfaces across Angular and React - with a strong emphasis on architectural integrity, clean code, and sustainable product delivery')
        };

        return;
    }

    public scroll(event: Event, sectionId: string): void {
        event.preventDefault();
        this.utilsService.scrollTo(sectionId);
    }

    private take(text: string): TChar[] {
        return text.split('').map((ch: string): TChar => {
            const item: TChar = {
                c: ch === ' ' ? '\u00A0' : ch,
                d: this.base + this.tick * this.step
            };
            this.tick += 1;
            return item;
        });
    }

    private takeWords(text: string): TWord[] {
        const parts: string[] = text.split(' ');
        return parts.map((word: string, index: number): TWord => {
            const letters: TChar[] = this.take(word);
            if (index < parts.length - 1) {
                letters.push(...this.take(' '));
            }
            return { letters };
        });
    }
}
