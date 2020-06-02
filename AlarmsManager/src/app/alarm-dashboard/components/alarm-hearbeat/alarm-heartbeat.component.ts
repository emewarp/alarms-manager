import { Component, Input, OnInit } from '@angular/core';
import { Heartbeat } from 'src/app/models/heartbeat.interface';
import { AlarmDashboardService } from '../../alarm-dashboard.service';

import { interval } from 'rxjs';

@Component({
    selector: 'alarm-heartbeat',
    styleUrls: ['alarm-heartbeat.component.scss'],
    templateUrl: './alarm-heartbeat.component.html'
})

export class AlarmHeartbeatComponent implements OnInit {

    @Input()
    heartbeat: boolean = false;

    databaseheartbeat: boolean = false;
    secondsCounter = interval(1000);

    constructor(private alarmService: AlarmDashboardService) { }

    ngOnInit(): void {
        this.secondsCounter.subscribe(() =>
            this.alarmService
                .getHeartbeats()
                .subscribe((data: Heartbeat[]) => {
                    this.databaseheartbeat = true;
                    if (data.length > 0)
                        this.heartbeat = data[0].heartbeatMessage == 1;
                },
                    error => this.databaseheartbeat = false)
        );
    }
}