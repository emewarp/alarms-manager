//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//Alarms Conatainer
import { AlarmDashboardContainer } from './containers/alarm-dashboard/alarm-dashboard.container';
//Alarms Components
import { AlarmDetailComponent } from './components/alarm-detail/alarm-detail.component';
import { AlarmHeartbeatComponent } from './components/alarm-hearbeat/alarm-heartbeat.component';
//Alarms Services
import { AlarmDashboardService } from './alarm-dashboard.service';
//routes 
import { appRoutes } from './alarm-dashboard-routing.module';

@NgModule({
    declarations: [
        //the components
        AlarmDashboardContainer,
        AlarmDetailComponent,
        AlarmHeartbeatComponent
    ],
    imports: [
      CommonModule,
      HttpModule,
      RouterModule.forChild(appRoutes)
    ],
    exports: [
      //las componentes que hagan falta para usarlas desde fuera (que son los contaieners)
      AlarmDashboardContainer,
      AlarmDetailComponent
    ],
    providers: [
      //the service
      AlarmDashboardService
    ]
  })

export class AlarmsDashboardModule{}