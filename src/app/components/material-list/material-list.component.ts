import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import { Material } from 'src/app/classes/material';
import { MaterialsService } from 'src/app/services/materials.service';
import { loadMaterials } from 'src/app/store/material.actions';
import { selectMaterials } from 'src/app/store/material.selectors';
import { MaterialsState } from 'src/app/store/material.state';

@Component({
    selector: 'app-material-list',
    templateUrl: './material-list.component.html',
    styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent {
    public materials$: Observable<any>;

    public filterInput: string;

    constructor(private store: Store<MaterialsState>) { }

    ngOnInit() {

        this.store.dispatch(loadMaterials());

        this.materials$ = this.store.select(selectMaterials);

        // Correction of structure and setting observable as array-like //
        this.materials$ = this.materials$.pipe(
            map(e => e.materials)
        );

    }
    

    getMaterialsFiltered() {
        
        // return this.ms.materials.filter(e => { return (e.DescTxt).includes(this.filterInput || "") });
    }
}
