import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleInterview } from './shedule-interview';

describe('SheduleInterview', () => {
  let component: SheduleInterview;
  let fixture: ComponentFixture<SheduleInterview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheduleInterview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheduleInterview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
