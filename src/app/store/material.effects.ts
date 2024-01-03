import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import { bookMaterial } from './material.actions';
import { Store } from '@ngrx/store';
import { MaterialsService } from '../services/materials.service';
import { selectMaterials } from './material.selectors';
import { MaterialsState } from './material.state';

@Injectable()
export class MaterialEffects {

    saveMaterials$ = createEffect(() =>
        this.actions$.pipe(
            ofType(bookMaterial),
            withLatestFrom(this.store.select((state: any) => selectMaterials(state))),
            // withLatestFrom(this.store.select(selectMaterials)),
            map(([, state]) => {
                MaterialsService.saveStateLocalStorage(state);
            })
        ),
        { dispatch: false } // Ensure dispatch is set to false if you don't want to dispatch new actions after this effect
    );

    constructor(
        private actions$: Actions,
        private store: Store,
    ) { }
}
