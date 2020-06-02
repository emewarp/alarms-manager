import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Alarm } from '../../models/alarm.interface';
import { AlarmDashboardService } from '../../alarm-dashboard.service';
import { KmRangeDto } from 'src/app/models/km-range-dto.interface';

import { interval } from 'rxjs';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  animateChild,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'alarm-dashboard',
  styleUrls: ['alarm-dashboard.container.scss'],
  templateUrl: './alarm-dashboard.container.html'
})

export class AlarmDashboardContainer implements OnInit {

  alarms: Alarm[];
  alarmsLength: number = 0;

  @Input()
  kmRange: KmRangeDto;

  secondsCounter = interval(1000);

  constructor(private alarmService: AlarmDashboardService) { }

  async ngOnInit() {

    this.alarmService.getAlarms().toPromise().then(x => {
      this.alarms = x;
      this.alarmsLength = this.alarms.length;
    });

    this.secondsCounter.subscribe(async () =>
      this.alarmService.getAlarms().toPromise().then(x => {
        this.alarms = x;
        this.alarmsLength = this.alarms.length;
      }));
  }

  async handleRemoveAlarm(event: Alarm) {
    this.secondsCounter.subscribe().unsubscribe();

    await this.alarmService.clearAlarm(event).subscribe();
    this.alarms = this.alarms.filter(x => x.id !== event.id);
    this.alarmsLength = this.alarms.length;
    
    this.secondsCounter.subscribe();
  }

  async onRemoveAll() {
    this.secondsCounter.subscribe().unsubscribe();
    //copy of the array for removing items in paralell
    let copyOfAlarms = this.alarms;

    for (const { item, index } of copyOfAlarms.map((item, index) => ({ item, index }))) {
      await this.alarmService.clearAlarm(item).toPromise();
      this.alarms = this.alarms.slice(index, 1);
    }

    this.alarmsLength = this.alarms.length;
    this.secondsCounter.subscribe();
  }

  @Output()
  openCamera: EventEmitter<Alarm> = new EventEmitter();

  handleOpenCamera(event: Alarm) {
    this.openCamera.emit(event);
  }

}
