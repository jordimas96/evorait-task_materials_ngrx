import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Material } from 'src/app/classes/material';
import { MaterialsService } from 'src/app/services/materials.service';
import { bookMaterial, loadMaterials } from 'src/app/store/material.actions';
import { selectMaterials } from 'src/app/store/material.selectors';


@Component({
    selector: 'app-material-details',
    templateUrl: './material-details.component.html',
    styleUrls: ['./material-details.component.scss']
})
export class MaterialDetailsComponent {

    public materials: Material[];
    public material: any;

    public materialId;
    public materials$: Observable<any>;

    public subscription: Subscription;


    public inputQuantity: number;

    inputValueCorrect = true;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<any>
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {

            this.materialId = params.get('id');
            if (!this.materialId) return;
            
            this.store.dispatch(loadMaterials());
        
            this.materials$ = this.store.select(selectMaterials);
            
            this.subscription = this.materials$.subscribe((res) => {
                this.materials = res.materials;
                this.material = MaterialsService.getMaterialById(res.materials, this.materialId);
            });
                

        });
    }

    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    clickBook() {

        if (this.inputQuantity > this.material.Available) {
            alert("Not enough items available");
            return;
        }

        this.store.dispatch(bookMaterial({ materialId: this.material.id, amount: this.inputQuantity }))
        
        if (this.inputQuantity > this.material.Available)
            this.inputQuantity = this.material.Available;
    }

    back() {
        let i = this.material.id - 1;
        if (i <= 0) i = this.materials.length;
        this.router.navigate(["material-details/" + i]);
    }
    next() {
        let i = this.material.id + 1;
        if (i > this.materials.length) i = 1;
        this.router.navigate(["material-details/" + i]);
    }


}
