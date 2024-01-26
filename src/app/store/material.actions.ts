import { createAction, props } from '@ngrx/store';
import { Material } from './material.state';

export const loadMaterials = createAction('[Material] Load materials');
export const loadMaterialsSuccess = createAction('[Material] Load materials success', props<{ materials: Material[] }>());
export const bookMaterial = createAction('[Material] Book material', props<{ materialId: number, amount: number }>());
