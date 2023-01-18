import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietingComponent } from './dieting.component';

describe('DietingComponent', () => {
  let component: DietingComponent;
  let fixture: ComponentFixture<DietingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
