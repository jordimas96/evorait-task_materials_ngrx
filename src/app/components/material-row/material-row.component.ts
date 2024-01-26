import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Material } from '../../classes/material';
import { bookMaterial } from '../../store/material.actions';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-material-row',
    templateUrl: './material-row.component.html',
    styleUrls: ['./material-row.component.scss'],
    standalone: true,
    imports: [RouterLink, FormsModule],
})
export class MaterialRowComponent {
    @Input() material: Material;

    public inputQuantity: number;


    constructor(private store: Store) { }

    public book() {

        if (this.inputQuantity > this.material.Available) {
            alert("Not enough items available");
            return;
        }

        this.store.dispatch(bookMaterial({ materialId: this.material.id, amount: this.inputQuantity }))
    }
}
