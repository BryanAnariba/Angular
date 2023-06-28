import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumesComponent } from './components/albumes/albumes.component';

const routes: Routes = [
    {
        path: ':albumId/user/:userId',
        component: AlbumesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AlbumRoutingModule { }
