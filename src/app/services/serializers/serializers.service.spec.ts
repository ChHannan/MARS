import { TestBed } from '@angular/core/testing';

import { SerializersService } from './serializers.service';

describe('SerializersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerializersService = TestBed.get(SerializersService);
    expect(service).toBeTruthy();
  });
});
