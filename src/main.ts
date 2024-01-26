

import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { MaterialEffects } from './app/store/material.effects';
import { materialsReducer } from './app/store/material.reducer';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot({ materials: materialsReducer }), EffectsModule.forRoot(MaterialEffects))]
})
  .catch(err => console.error(err));
