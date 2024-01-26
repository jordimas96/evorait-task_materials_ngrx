import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Material } from "../classes/material";
import { MaterialsState } from "./material.state";



export const selectMaterialsState = createFeatureSelector<MaterialsState>("materials");


export const selectMaterials = createSelector(
    selectMaterialsState,
    (state: MaterialsState) => state.materials
);

export const selectMaterialById = (id: number) => createSelector(
    selectMaterialsState,
    (state: MaterialsState) => {
        const materials = state.materials;
        const foundMaterial = materials.find((material: Material) => material.id == id);

        return foundMaterial;
    }
);

export const getMaterialsAmount = createSelector(
    selectMaterialsState,
    (state: MaterialsState) => state.materials.length
);