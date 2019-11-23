import { TestBed, async, inject } from '@angular/core/testing';

import { GaurdCanDeacitveGuard } from './gaurd-can-deacitve.guard';

describe('GaurdCanDeacitveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaurdCanDeacitveGuard]
    });
  });

  it('should ...', inject([GaurdCanDeacitveGuard], (guard: GaurdCanDeacitveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
