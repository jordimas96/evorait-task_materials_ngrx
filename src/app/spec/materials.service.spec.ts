import { MaterialsService } from '../services/materials.service';

describe('Materials', () => {
  it('should create an instance', () => {
    expect(new MaterialsService()).toBeTruthy();
  });
});
