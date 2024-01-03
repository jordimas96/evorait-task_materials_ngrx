import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MaterialEffects } from './material.effects';

describe('MaterialEffects', () => {
  let actions$: Observable<any>;
  let effects: MaterialEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MaterialEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MaterialEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
