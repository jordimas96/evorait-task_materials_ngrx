import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, combineLatestWith, map, startWith } from 'rxjs';
import { selectMaterials } from 'src/app/store/material.selectors';
import { Material, MaterialsState } from 'src/app/store/material.state';
import { AsyncPipe } from '@angular/common';
import { MaterialRowComponent } from '../material-row/material-row.component';

@Component({
    selector: 'app-material-list',
    templateUrl: './material-list.component.html',
    styleUrls: ['./material-list.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialRowComponent,
        AsyncPipe,
    ],
})
export class MaterialListComponent {
    public materialsFiltered$: Observable<Material[]>;

    public filterControl = new FormControl('');


    constructor(private store: Store<MaterialsState>) {
        
        const materials$ = this.store.select(selectMaterials);

        this.materialsFiltered$ = this.filterControl.valueChanges.pipe(
            startWith(''),
            map(text => text!.toLowerCase()),
            combineLatestWith(materials$),
            map(([filterText, materials]) =>
                materials.filter(material =>
                    material.DescTxt.toLowerCase().includes(filterText)
                )
            )
        );

    }

}
