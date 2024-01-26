import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDetailsComponent } from '../components/material-details/material-details.component';

describe('MaterialDetailsComponent', () => {
  let component: MaterialDetailsComponent;
  let fixture: ComponentFixture<MaterialDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MaterialDetailsComponent]
});
    fixture = TestBed.createComponent(MaterialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
