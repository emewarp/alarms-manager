import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'dashboard', component: AppComponent, children: [
      { path: 'dashboard', loadChildren: './alarm-dashboard/alarm-dashboard.module#AlarmsDashboardModule' },
      { path: 'dashboard', loadChildren: './livevideo-dashboard/livevideo-dashboard.module#LiveVideoDashboardModule' },
    ]
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
