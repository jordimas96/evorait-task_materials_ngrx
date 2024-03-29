import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialListComponent } from '../components/material-list/material-list.component';

describe('HomePageComponent', () => {
  let component: MaterialListComponent;
  let fixture: ComponentFixture<MaterialListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MaterialListComponent]
});
    fixture = TestBed.createComponent(MaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
