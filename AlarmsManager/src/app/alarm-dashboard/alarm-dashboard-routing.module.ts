import { Routes } from '@angular/router';
import { AlarmDashboardContainer } from './containers/alarm-dashboard/alarm-dashboard.container';
import { AlarmDetailComponent } from './components/alarm-detail/alarm-detail.component';
import { AlarmHeartbeatComponent } from './components/alarm-hearbeat/alarm-heartbeat.component';

export const appRoutes: Routes = [{
    path: 'alarm-dashboard', component: AlarmDashboardContainer, children: [
        { path: 'alarm-detail', component: AlarmDetailComponent },
        { path: 'alarm-heartbeat', component: AlarmHeartbeatComponent },
        { path: '**', redirectTo: 'alarm-dashboard' },
    ]
}];
