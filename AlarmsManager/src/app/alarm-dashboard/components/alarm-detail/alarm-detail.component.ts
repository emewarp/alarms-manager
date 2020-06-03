import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Alarm } from '../../models/alarm.interface';
import { KmRangeDto } from 'src/app/models/km-range-dto.interface';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'alarm-detail',
  styleUrls: ['alarm-detail.component.scss'],
  templateUrl: './alarm-detail.component.html',
  animations: [
    trigger('selectedState', [
      state('high', style({ backgroundColor: '#dc3545', color: 'white' })),
      state('medium', style({ backgroundColor: '#ffc107', color: '#343a40'})),
      state('low', style({ backgroundColor: '#007bff', color: 'white' })),
      state('info', style({ backgroundColor: '#17a2b8', color: 'white'})),
      state('white', style({ backgroundColor: 'white', color: '#343a40'})),
      //transition from selected to unselected
      transition('high <=> white', animate('1000ms ease')),
      transition('medium <=> white', animate('1000ms ease')),
      transition('low <=> white', animate('1000ms ease')),
      transition('info <=> white', animate('1000ms ease')),
      //transition from unselected to selected
      transition('white <=> high', animate('1000ms ease')),
      transition('white <=> medium', animate('1000ms ease')),
      transition('white <=> low', animate('1000ms ease')),
      transition('white <=> info', animate('1000ms ease')),
    ])
  ]
})

export class AlarmDetailComponent implements OnChanges {

  @Input()
  detail: Alarm;

  @Input()
  kmRangeAlarm: KmRangeDto;

  alertSelected: string = "";
  buttonSelected: string = "";
  color:string="0f0";
  selectedState: string = "white";

  @Output()
  removeAlarm: EventEmitter<Alarm> = new EventEmitter();
  onRemoveAlarm(): void {
    this.removeAlarm.emit(this.detail);
  }

  @Output()
  openCamera: EventEmitter<Alarm> = new EventEmitter();
  onOpenCamera(): void {
    this.openCamera.emit(this.detail);
  }

  ngOnChanges(): void {
    if (this.detail.km >= this.kmRangeAlarm.startKmPoint && this.detail.km <= this.kmRangeAlarm.endKmPoint) 
      this.selectedState=this.detail.alertLevel;
    else       
      this.selectedState="white";            
      
    switch (this.detail.alertLevel) {
      case "high":
        this.alertSelected = "border-danger";
        this.buttonSelected = "btn-danger";
        break;
      case "medium":
        this.alertSelected = "border-warning";
        this.buttonSelected = "btn-warning";  
        break;
      case "low":
        this.alertSelected = "border-primary";
        this.buttonSelected = "btn-primary";
        break;
      default:
        this.alertSelected = "border-info";
        this.buttonSelected = "btn-info";
        break;
    }

  }
}