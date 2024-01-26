import { createReducer, on } from '@ngrx/store';
import * as MaterialsActions from './material.actions';
import { MaterialsState } from './material.state';
import { Utils } from '../shared/utils';


export const initialState: MaterialsState = {
    materials: [],
};

export const materialsReducer = createReducer(
    initialState,
    on(MaterialsActions.loadMaterialsSuccess, (state, props) => {
        const newState = {
            ...state,
            materials: props.materials,
        }
        return newState;
    }),
    on(MaterialsActions.bookMaterial, (state, { materialId, amount }) => {
        let affectedMaterial = Utils.getMaterialById(state.materials, materialId);

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