import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TPrinciple = { title: string; body: string };
type TAboutUi = { principles: TPrinciple[]; strengths: string[] };

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    constructor() { return; }

    public ui: TAboutUi = {
        principles: <TPrinciple[]>[
            {
                title: 'Product delivery',
                body: 'At Enreach Labs, I\'ve led and contributed to a wide range of impactful projects - from developing real-time communication platforms to implementing Drone CI/CD pipelines, managing Nginx and proxy servers, and migrating large-scale systems for improved performance and scalability.'
            },
            {
                title: 'Modern frontend',
                body: 'My core work involves creating user-focused features using modern JavaScript frameworks, especially Angular and more recently React. I\'ve also been responsible for maintaining custom component libraries across multiple applications, ensuring design consistency and development efficiency.'
            },
            {
                title: 'Infrastructure',
                body: 'Alongside application development, I manage infrastructure tasks including domain configurations, SSL certificate handling, and secure traffic routing.'
            },
            {
                title: 'Way of working',
                body: 'I bring a well-rounded approach to software development, combining technical expertise with adaptability, problem-solving, and a focus on delivering reliable, high-quality solutions.'
            }
        ],
        strengths: [
            'Frontend Architecture',
            'Design Systems',
            'Angular & React',
            'Performance Optimization',
            'CI/CD & Infrastructure',
            'Real-time Applications',
            'Component Libraries',
            'Migration & Refactoring',
            'Proxy & Server Configuration',
            'Multi-app Architecture',
            'Cross-platform Development'
        ]
    };
}
