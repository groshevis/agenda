import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroInfoPage } from './primeiro-info.page';

describe('PrimeiroInfoPage', () => {
  let component: PrimeiroInfoPage;
  let fixture: ComponentFixture<PrimeiroInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
