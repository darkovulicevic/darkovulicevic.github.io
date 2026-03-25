import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
    let component: ExperienceComponent;
    let fixture: ComponentFixture<ExperienceComponent>;

    beforeEach(async (): Promise<void> => {
        await TestBed.configureTestingModule({
            imports: [ExperienceComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ExperienceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
