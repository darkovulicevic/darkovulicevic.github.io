import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyComponent } from './copy.component';

describe('CopyComponent', () => {
    let component: CopyComponent;
    let fixture: ComponentFixture<CopyComponent>;

    beforeEach(async (): Promise<void> => {
        await TestBed.configureTestingModule({
            imports: [CopyComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CopyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
