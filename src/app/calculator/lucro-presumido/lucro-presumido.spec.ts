import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucroPresumido } from './lucro-presumido';

describe('LucroPresumido', () => {
  let component: LucroPresumido;
  let fixture: ComponentFixture<LucroPresumido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LucroPresumido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucroPresumido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
