import * as materialsFileContent from '../../assets/MatPricingSet.json';
import { Injectable } from '@angular/core';
import { Material } from '../classes/material';

@Injectable({
    providedIn: 'root'
})
export class MaterialsService {

    public static getStateLocalStorage() {
        return JSON.parse(localStorage.getItem("state")!);
    }
    public static saveStateLocalStorage(state: any) {
        localStorage.setItem("state", JSON.stringify(state));
    }


    public static retrieveState() {

        // Take state from local Storage //
        let state = this.getStateLocalStorage();

        // If state not found, then get materials from file //
        if (!state)
            state = {};

        if (!state.materials) {
            // Read from file //
            let materialsJson = materialsFileContent;

            // Artificially add ids for better management and Parse numbers to integer //
            state.materials = materialsJson.d.PartSet.results.map((e, i) => {
                return {
                    ...e,
                    id: i + 1,
                    Quantity: parseInt(e.Quantity),
                    Available: parseInt(e.Available),
                }
            });
        }

        return state;
    }


    public static getMaterialById(materials: Array<any>, id: number) {
        return materials.find((material) => { return material.id == id }) || null;
    }


    
}
