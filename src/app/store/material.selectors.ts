import { createSelector } from "@ngrx/store";
import { Material } from "../classes/material";
import { MaterialsState } from "./material.state";


// export const selectMaterials = (state: MaterialsState): Material[] => state.materials;

export const selectMaterialsState = (state: MaterialsState) => state;
export const selectMaterials = createSelector(selectMaterialsState,
    (state: MaterialsState) => state.materials);