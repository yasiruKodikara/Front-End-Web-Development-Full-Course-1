import { TestBed } from '@angular/core/testing';

import { MyService3Service } from './services/my-service3.service';

describe('MyService3Service', () => {
  let service: MyService3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyService3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
