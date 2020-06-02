//Angular Modules
import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Video Conatainers
import { LivevideoDashboardContainer } from './containers/livevideo-dashboard/livevideo-dashboard.container';
//Video Components
import { LivevideoTileComponent } from './components/livevideo-tile/livevideo-tile.component';
import { LiveVideoCamerasComponent } from './components/livevideo-cameras/livevideo-cameras.component';
//Video Services
import { LivevideoDashboardService } from './livevideo-dashboard.service';
//routes 
import { appRoutes } from './livevideo-dashboard-routing.module';

@NgModule({
    declarations: [
        //the components
        LivevideoDashboardContainer,
        LivevideoTileComponent,
        LiveVideoCamerasComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(appRoutes)
    ],
    exports: [
      LivevideoDashboardContainer
    ],
    providers: [
      //the service
      LivevideoDashboardService
    ]
  })

export class LiveVideoDashboardModule{

  
}