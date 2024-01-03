import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { MaterialDetailsComponent } from './components/material-details/material-details.component';

const routes: Routes = [
    {
        path: "material-details/:id",
        component: MaterialDetailsComponent
    },
    {
        path: "",
        component: MaterialListComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
