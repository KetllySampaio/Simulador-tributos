import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplesNacional } from './simples-nacional';

describe('SimplesNacional', () => {
  let component: SimplesNacional;
  let fixture: ComponentFixture<SimplesNacional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplesNacional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplesNacional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
