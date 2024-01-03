import { createReducer, on } from '@ngrx/store';
import * as MaterialsActions from './material.actions';
import { MaterialsService } from '../services/materials.service';
import { MaterialsState } from './material.state';


export const initialState: MaterialsState = {
    materials: [],
};

export const materialsReducer = createReducer(
    initialState,
    on(MaterialsActions.loadMaterials, (state) => {
        const savedState = MaterialsService.retrieveState();
         
        return {
            ...state,
            materials: savedState.materials,
        }
    }),
    on(MaterialsActions.bookMaterial, (state, { materialId, amount }) => {
        let affectedMaterial = MaterialsService.getMaterialById(state.materials, materialId);

        if (!affectedMaterial) {
            alert("Incorrect material id");
            return state;
        }

        const newQuantity = affectedMaterial.Quantity + amount;
        const newAvailable = affectedMaterial.Available - amount;

        affectedMaterial = {
            ...affectedMaterial,
            Quantity: newQuantity,
            Available: newAvailable,
        }
        let materials = [...state.materials];
        
        const index = materials.findIndex(e => e.id == materialId);
        materials[index] = affectedMaterial;
        

        // TODO: Aqui tirar side effect de savematerials. a pues no
        MaterialsActions.bookMaterial // Reemplaza con el nombre de tu acción

        

        return {
            ...state,
            materials
        };
    }),
);