import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoContributionComponent } from './algo-contribution.component';

describe('AlgoContributionComponent', () => {
  let component: AlgoContributionComponent;
  let fixture: ComponentFixture<AlgoContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
