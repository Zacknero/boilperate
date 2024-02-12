import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleCounterComponent } from './double-counter.component';

describe('DoubleCounterComponent', () => {
  let component: DoubleCounterComponent;
  let fixture: ComponentFixture<DoubleCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoubleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
