import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Utils } from '../shared/utils';
import { bookMaterial, loadMaterials, loadMaterialsSuccess } from './material.actions';
import { selectMaterialsState } from './material.selectors';
import { MaterialsState } from './material.state';

@Injectable()
export class MaterialEffects {

    constructor(
        private actions$: Actions,
        private store: Store<MaterialsState>,
    ) { }

    loadMaterials$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMaterials),
            switchMap(() => {
                const state = Utils.retrieveState();
                const materials = state.materials;
                return of(loadMaterialsSuccess({ materials }));
            })
            
        )
    );

    saveMaterials$ = createEffect(() =>
        this.actions$.pipe(
            ofType(bookMaterial),
            switchMap(() => {
                return this.store.select(selectMaterialsState).pipe(
                    map((state) => {
                        Utils.saveStateLocalStorage(state);
                        return of(undefined);
                    })
                )
            })
            
        ),
        { dispatch: false } // Ensure dispatch is set to false if you don't want to dispatch new actions after this effect
    );
}
