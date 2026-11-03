import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TProject = { name: string; link: string; summary: string; impact: string; stack: string[] };
type TProjectsUi = { projects: TProject[] };

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    constructor() { return; }

    public ui: TProjectsUi = {
        projects: <TProject[]>[
            {
                name: 'Reporting Portal',
                link: '#',
                summary: 'Built a flexible recurring reporting system with daily/weekly/monthly execution windows and delivery rules. A web application that offers tools for managing and visualizing reports and statistics.',
                impact: 'Reduced manual reporting creation overhead with reusable schedule presets.',
                stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind', 'pnpm']
            },
            {
                name: 'Unified Contact Platform',
                link: '#',
                summary: 'Delivered new realtime features and maintenance for a chat/call web client used across internal teams.',
                impact: 'Enhanced communication and collaboration capabilities through real-time messaging and voice/video calling.',
                stack: ['JavaScript', 'TypeScript', 'Angular', 'Node.js', 'WebSocket', 'HTML', 'SCSS']
            },
            {
                name: 'Custom Frontend Design System',
                link: '#',
                summary: 'Maintained and extended reusable UI primitives adopted by multiple product surfaces.',
                impact: 'Faster delivery and visual consistency across the product suite.',
                stack: ['JavaScript', 'TypeScript', 'Stencil', 'HTML', 'SCSS', 'Storybook']
            }
        ]
    };
}
