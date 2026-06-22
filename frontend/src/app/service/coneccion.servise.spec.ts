import { TestBed } from '@angular/core/testing';

import { ConeccionServise } from './coneccion.servise';

describe('ConeccionServise', () => {
  let service: ConeccionServise;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConeccionServise);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
