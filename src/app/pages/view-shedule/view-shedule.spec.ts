import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShedule } from './view-shedule';

describe('ViewShedule', () => {
  let component: ViewShedule;
  let fixture: ComponentFixture<ViewShedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewShedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewShedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
