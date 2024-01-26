import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { bookMaterial } from 'src/app/store/material.actions';
import { getMaterialsAmount, selectMaterialById } from 'src/app/store/material.selectors';
import { Material, MaterialsState } from 'src/app/store/material.state';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-material-details',
    templateUrl: './material-details.component.html',
    styleUrls: ['./material-details.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        FormsModule,
        AsyncPipe,
    ],
})
export class MaterialDetailsComponent implements OnInit {

    public materials: Material[];

    public materialId: number;
    public materialsAmount$: Observable<number>;
    public material$: Observable<Material | undefined>;

    public subscription: Subscription;


    public inputQuantity: number;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<MaterialsState>
    ) {
        this.materialsAmount$ = store.select(getMaterialsAmount);
        
    }

    public ngOnInit() {
        this.subscription = this.route.paramMap
            .subscribe(params => {

                this.materialId = parseInt(params.get('id')!);
                if (!this.materialId) return;

                this.material$ = this.store.select(selectMaterialById(this.materialId));
            
            });
    }

    public ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    public book() {

        this.material$
            .pipe(take(1))
            .subscribe((material) => {

                if (this.inputQuantity > material!.Available) {
                    alert("Not enough items available");
                    return;
                }

                this.store.dispatch(bookMaterial({ materialId: this.materialId, amount: this.inputQuantity }))
                
            });
    }

    public back() {
        this.materialsAmount$
            .pipe(take(1))
            .subscribe(materialsAmount => {
                let i = this.materialId - 1;
                if (i <= 0) {
                    i = materialsAmount;
                }
                this.router.navigate(["material-details/" + i]);
            });
    }
    public next() {
        this.materialsAmount$
            .pipe(take(1))
            .subscribe(materialsAmount => {
                let i = this.materialId + 1;
                if (i > materialsAmount) {
                    i = 1;
                }
                this.router.navigate(["material-details/" + i]);
            });
    }


}
