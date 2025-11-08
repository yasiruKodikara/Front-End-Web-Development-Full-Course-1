import { TestBed } from '@angular/core/testing';

import { ClientServerCom1Service } from './services/client-server-com-1.service';

describe('ClientServerCom1Service', () => {
  let service: ClientServerCom1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientServerCom1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
