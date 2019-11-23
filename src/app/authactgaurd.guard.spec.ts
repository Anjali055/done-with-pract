import { TestBed, async, inject } from '@angular/core/testing';

import { AuthactgaurdGuard } from './authactgaurd.guard';

describe('AuthactgaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthactgaurdGuard]
    });
  });

  it('should ...', inject([AuthactgaurdGuard], (guard: AuthactgaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
