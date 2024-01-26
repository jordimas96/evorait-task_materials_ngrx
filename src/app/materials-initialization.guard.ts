import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, first, map, take, tap } from 'rxjs';
import { loadMaterials } from './store/material.actions';
import { selectMaterials } from './store/material.selectors';
import { MaterialsState } from './store/material.state';

@Injectable({
    providedIn: 'root'
})
export class MaterialsInitializationGuard {
    constructor(private store: Store<MaterialsState>) { }

    canActivate(): Observable<boolean> {
        
        return this.store.select(selectMaterials).pipe(
            map((materials) => {
                const materialsLoaded = materials.length > 0;
                if (!materialsLoaded) {
                    this.store.dispatch(loadMaterials());
                }
                return materialsLoaded;
            }),
            filter((loaded) => loaded),
            first()
        )


    }
}
