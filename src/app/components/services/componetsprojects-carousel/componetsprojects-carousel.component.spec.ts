import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetsprojectsCarouselComponent } from './componetsprojects-carousel.component';

describe('ComponetsprojectsCarouselComponent', () => {
  let component: ComponetsprojectsCarouselComponent;
  let fixture: ComponentFixture<ComponetsprojectsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponetsprojectsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetsprojectsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
