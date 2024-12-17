import { Component } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    constructor() { return; }

    public ui = {
        cards: [
            {
                date: 'Dec 2024 - now',
                pos: 'Software Developer',
                desc: 'Actively contributing to the Reporting Portal project — a React(v19) web application that offers tools for managing and visualizing reports and statistics.',
                skills: [
                    {
                        name: 'TypeScript'
                    },
                    {
                        name: 'React v(19)'
                    },
                    {
                        name: 'pnpm'
                    },
                    {
                        name: 'Tailwind CSS'
                    }
                ]
            },
            {
                date: 'Dec 2023 – Now',
                pos: 'Software Developer',
                desc: 'Contributed to the implementation of Drone CI/CD pipelines and currently maintaining and refining build scripts to ensure seamless integration, efficient deployment, and continuous improvement of the development workflow.',
                skills: [
                    {
                        name: 'Drone'
                    },
                    {
                        name: 'CI/CD'
                    },
                    {
                        name: 'Node.js'
                    },
                    {
                        name: 'Shell'
                    },
                    {
                        name: 'Bitbucket'
                    }
                ]
            },
            {
                date: 'Dec 2022 – Now',
                pos: 'Software Developer',
                desc: 'Utilizing and maintaining a custom component and brand library across Enreact Contact, QBOARD, and the Reporting Portal, ensuring consistency, scalability, and alignment with design standards.',
                skills: [
                    {
                        name: 'JavaScript'
                    },
                    {
                        name: 'TypeScript'
                    },
                    {
                        name: 'Stencil.js'
                    },
                    {
                        name: 'HTML & SCSS'
                    }
                ]
            },
            {
                date: 'Dec 2022 – Jan 2023',
                pos: 'Software Developer',
                desc: 'Contributed to the migration of Enreach Contact (formerly Unified Desktop and Web Client) and the QBOARD web app to a new backend system, Grid, aimed at enhancing scalability and overall performance. The migration improved the backend infrastructure, ensuring better support for both current and future needs.',
                skills: [
                    {
                        name: 'JavaScript'
                    },
                    {
                        name: 'TypeScript'
                    },
                    {
                        name: 'Node.js'
                    },
                    {
                        name: 'Angular'
                    },
                    {
                        name: 'Angular Material'
                    },
                    {
                        name: 'HTML & SCSS'
                    },
                    {
                        name: 'Git'
                    },
                    {
                        name: 'Bitbucket'
                    },
                    {
                        name: 'Jira'
                    },
                    {
                        name: 'Confluence'
                    }
                ]
            },
            {
                date: 'May 2021 – Dec 2022',
                pos: 'Software Developer',
                desc: 'Contributed to the development of Unified Desktop and Web Client, a real-time chat and call application built with Angular, focusing on delivering a seamless user experience across desktop and web platforms. Continued to work on QBOARD, enhancing functionalities and developing new features to improve performance, maintain the application, and identify various bugs. Contributed to the development of the Infinity JS Connection Library, Google JS Connection Library, Microsoft JS Connection Library, and Chat JS Library(Chat Library for Infinity backend) designed to connect to Infinity, Google, and Microsoft while utilizing various backend features. Each feature is represented by a single feature object, with helpful sub-objects created in certain cases to represent more complex items, such as soft phone calls or queues.',
                skills: [
                    {
                        name: 'JavaScript'
                    },
                    {
                        name: 'TypeScript'
                    },
                    {
                        name: 'Node.js'
                    },
                    {
                        name: 'Angular'
                    },
                    {
                        name: 'Angular Material'
                    },
                    {
                        name: 'HTML & SCSS'
                    },
                    {
                        name: 'Git'
                    },
                    {
                        name: 'Bitbucket'
                    },
                    {
                        name: 'Jira'
                    },
                    {
                        name: 'Confluence'
                    }
                ]
            },
            {
                date: 'Dec 2020 – May 2021',
                pos: 'Software Developer',
                desc: 'Contributed to the development of QBOARD, a web application in Angular for the support team to monitor busy and over-occupied lines. The project featured a refreshed UI based on the functionality of an older app and improved team efficiency and response times through enhanced usability.',
                skills: [
                    {
                        name: 'JavaScript'
                    },
                    {
                        name: 'Angular'
                    },
                    {
                        name: 'Angular Material'
                    },
                    {
                        name: 'HTML & SCSS'
                    },
                    {
                        name: 'Git'
                    },
                    {
                        name: 'Bitbucket'
                    },
                    {
                        name: 'Jira'
                    },
                    {
                        name: 'Confluence'
                    }
                ]
            }
        ]
    }
}
