import * as materialsFileContent from '../../assets/MatPricingSet.json';
import { MaterialsState } from '../store/material.state';
import { Material } from './../store/material.state';

export class Utils {

    public static getStateLocalStorage(): MaterialsState {
        return JSON.parse(localStorage.getItem("state")!);
    }

    public static saveStateLocalStorage(state: MaterialsState) {
        localStorage.setItem("state", JSON.stringify(state));
    }

    public static retrieveState(): MaterialsState {

        // Take state from local Storage //
        let state = Utils.getStateLocalStorage();

        // If state not found, then get materials from file //
        if (!state) {
            // Read from file //
            let materialsJson = materialsFileContent;

            // Artificially add ids for better management and Parse numbers to integer //
            const materials = materialsJson.d.PartSet.results.map((e, i) => {
                return {
                    ...e,
                    id: i + 1,
                    Quantity: parseInt(e.Quantity),
                    Available: parseInt(e.Available),
                }
            });

            state = { materials };
        }

        return state;
    }


    public static getMaterialById(materials: Array<Material>, id: number): Material {
        const foundMaterial = materials.find((material) => { return material.id == id });
        if (!foundMaterial) throw new Error();
        return foundMaterial;
    }

    public static wait(ms: number): Promise<void> {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

}