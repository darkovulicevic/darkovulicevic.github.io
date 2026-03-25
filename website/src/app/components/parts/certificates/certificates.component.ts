import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';

type TSkill = { name: string };
type TCertificateCard = { date: string; pos: string; issuer: string; desc: string; showIssuerIcon: boolean; skills: TSkill[] };
type TCertificatesUi = { cards: TCertificateCard[] };

@Component({
    selector: 'app-certificates',
    standalone: true,
    imports: [CommonModule, CardComponent],
    templateUrl: './certificates.component.html',
    styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
    constructor() { return; }

    public ui: TCertificatesUi = {
        cards: <TCertificateCard[]>[
            {
                date: 'June 2024',
                pos: 'Data Protection Basics 3 – Processing Personal Information',
                issuer: 'OneTrust',
                desc: 'Applying data protection principles of transparency, consent, data minimization, purpose limitation, security and access throughout the information life cycle.',
                showIssuerIcon: false,
                skills: [{ name: 'Data Protection' }, { name: 'GDPR' }, { name: 'Compliance' }]
            },
            {
                date: 'June 2024',
                pos: 'Data Protection Basics 2 – What is Personal Information',
                issuer: 'OneTrust',
                desc: 'Recognizing and processing personal data through concepts of sensitivity, identifiability, masking, aggregating and truncating.',
                showIssuerIcon: false,
                skills: [{ name: 'Data Protection' }, { name: 'Privacy' }, { name: 'Compliance' }]
            },
            {
                date: 'June 2024',
                pos: 'Data Protection Basics 1 – Why Privacy Matters',
                issuer: 'OneTrust',
                desc: 'Understanding data protection and information security fundamentals to reduce errors that result in data protection incidents.',
                showIssuerIcon: false,
                skills: [{ name: 'Data Protection' }, { name: 'Privacy' }, { name: 'Security' }]
            },
            {
                date: 'June 2024',
                pos: 'Privacy and Security Awareness',
                issuer: 'OneTrust',
                desc: 'Privacy and security practices in the workplace covering data access minimization, secure information handling, proper data destruction, and security awareness.',
                showIssuerIcon: false,
                skills: [{ name: 'Privacy' }, { name: 'Security' }, { name: 'Awareness' }]
            },
            {
                date: 'Dec 2025',
                pos: 'Angular: Building Large Applications',
                issuer: 'LinkedIn Learning',
                desc: 'Structuring and scaling large Angular applications with a focus on web development best practices and frontend architecture.',
                showIssuerIcon: false,
                skills: [{ name: 'Angular' }, { name: 'Web Development' }, { name: 'Front-End Development' }]
            },
        ]
    };
}
