import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { MaterialDetailsComponent } from './components/material-details/material-details.component';
import { MaterialsInitializationGuard } from './materials-initialization.guard';

const routes: Routes = [
    {
        path: "material-details/:id",
        component: MaterialDetailsComponent,
        canActivate: [MaterialsInitializationGuard]
    },
    {
        path: "",
        component: MaterialListComponent,
        canActivate: [MaterialsInitializationGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
