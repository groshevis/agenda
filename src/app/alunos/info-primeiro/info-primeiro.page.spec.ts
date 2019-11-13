import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrimeiroPage } from './info-primeiro.page';

describe('InfoPrimeiroPage', () => {
  let component: InfoPrimeiroPage;
  let fixture: ComponentFixture<InfoPrimeiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPrimeiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPrimeiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
