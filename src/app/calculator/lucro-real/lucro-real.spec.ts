import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucroReal } from './lucro-real';

describe('LucroReal', () => {
  let component: LucroReal;
  let fixture: ComponentFixture<LucroReal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LucroReal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucroReal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
