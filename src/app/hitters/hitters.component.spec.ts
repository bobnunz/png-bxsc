import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HittersComponent } from './hitters.component';

describe('HittersComponent', () => {
  let component: HittersComponent;
  let fixture: ComponentFixture<HittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
