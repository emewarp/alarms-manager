import { Routes } from '@angular/router';
import { LivevideoDashboardContainer } from './containers/livevideo-dashboard/livevideo-dashboard.container';
import { LiveVideoCamerasComponent } from './components/livevideo-cameras/livevideo-cameras.component';
import { LivevideoTileComponent } from './components/livevideo-tile/livevideo-tile.component';

export const appRoutes: Routes = [{
    path: 'livevideo-dashboard', component: LivevideoDashboardContainer, children: [
        { path: 'livevideo-cameras', component: LiveVideoCamerasComponent },
        { path: 'livevideo-tile', component: LivevideoTileComponent },
        { path: '**', redirectTo: 'livevideo-dashboard' },
    ]
}];
