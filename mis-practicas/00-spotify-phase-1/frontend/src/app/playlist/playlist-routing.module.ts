import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';

const routes: Routes = [
    {
        path: ':playlistId',
        component: PlaylistsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class PlaylistRoutingModule { }
