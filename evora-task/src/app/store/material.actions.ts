import { createAction, props } from '@ngrx/store';

export const loadMaterials = createAction('[Material] Load materials');
export const bookMaterial = createAction('[Material] Book material', props<{ materialId: number, amount: number }>());
