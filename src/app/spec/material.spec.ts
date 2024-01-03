import { Material } from '../classes/material';
import { MaterialsService } from '../services/materials.service';

describe('Material', () => {
  it('should create an instance', () => {
    expect(new MaterialsService()).toBeTruthy();
  });
});
