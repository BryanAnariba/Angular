import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'playlists',
        loadChildren: () => import('./playlist/playlist.module').then( m => m.PlaylistModule ),
    },
    {
        path: 'albumes',
        loadChildren: () => import( './album/album.module' ).then( m => m.AlbumModule ),
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
