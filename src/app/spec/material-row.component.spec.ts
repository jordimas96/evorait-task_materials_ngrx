import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRowComponent } from '../components/material-row/material-row.component';

describe('MaterialComponent', () => {
  let component: MaterialRowComponent;
  let fixture: ComponentFixture<MaterialRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialRowComponent]
    });
    fixture = TestBed.createComponent(MaterialRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
