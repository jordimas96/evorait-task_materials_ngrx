import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { MaterialRowComponent } from './components/material-row/material-row.component';
import { FormsModule } from '@angular/forms';
import { MaterialDetailsComponent } from './components/material-details/material-details.component';
import { StoreModule } from '@ngrx/store';
import { materialsReducer } from './store/material.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MaterialEffects } from './store/material.effects';

@NgModule({
  declarations: [
    AppComponent,
    MaterialListComponent,
    MaterialRowComponent,
    MaterialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ materials: materialsReducer }),
    EffectsModule.forRoot([MaterialEffects]),
  ],
  providers: [MaterialEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }