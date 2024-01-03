import { bookMaterial } from '../../store/material.actions';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Material } from '../../classes/material';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-material-row',
    templateUrl: './material-row.component.html',
    styleUrls: ['./material-row.component.scss']
})
export class MaterialRowComponent {
    @Input() material: Material;

    @Output() book = new EventEmitter<any>();

    @Output() save = new EventEmitter<void>();

    public inputQuantity: number;

    inputValueCorrect = true;


    constructor(private store: Store) { }

    
    ngOnInit() { }

    clickBook() {

        if (this.inputQuantity > this.material.Available) {
            alert("Not enough items available");
            return;
        }

        this.store.dispatch(bookMaterial({ materialId: this.material.id, amount: this.inputQuantity }))


        if (this.inputQuantity > this.material.Available)
            this.inputQuantity = this.material.Available;

        
        // this.store.dispatch(saveMaterials());

    }
}
