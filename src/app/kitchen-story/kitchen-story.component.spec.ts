import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenStoryComponent } from './kitchen-story.component';

describe('KitchenStoryComponent', () => {
  let component: KitchenStoryComponent;
  let fixture: ComponentFixture<KitchenStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
