import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Camera } from '../../models/camera.interface';
import { KmPointDto } from 'src/app/models/km-point-dto.interface';
import { LivevideoDashboardService } from '../../livevideo-dashboard.service';

import { interval } from 'rxjs';


@Component({
  selector: 'livevideo-dashboard',
  styleUrls: ['livevideo-dashboard.container.scss'],
  templateUrl: './livevideo-dashboard.container.html'
})

export class LivevideoDashboardContainer implements OnInit, OnChanges {

  cameras: Camera[] = [];
  selectedCamera: Camera;

  @Input()
  kmPoint: KmPointDto;

  secondsCounter = interval(1000);

  constructor(private livevideoService: LivevideoDashboardService) { }

  ngOnInit(): void {
    this.livevideoService
        .getCameras()
        .subscribe((data: Camera[]) => {
          this.cameras = data;
          if(this.cameras.length>0)
            this.selectedCamera = this.cameras[0];
          this.kmPoint = { km: this.selectedCamera.km } as KmPointDto;
        },
          error => console.log('Error onGet: ', error));

    this.secondsCounter.subscribe(() =>
      this.livevideoService
        .getCameras()
        .subscribe((data: Camera[]) => {
          this.cameras = data;
          if(this.cameras.length>0 && (this.selectedCamera === undefined || this.selectedCamera === null))
            this.selectedCamera = this.cameras[0];
          this.kmPoint = { km: this.selectedCamera.km } as KmPointDto;
        },
          error => console.log('Error onGet: ', error))
    );
  }

  ngOnChanges() {
    this.cameras.forEach(camera => {
      if ((this.kmPoint.km >= camera.startingKmPoint) && (this.kmPoint.km <= camera.endingKmPoint)) {

        this.selectedCamera = Object.assign(camera);
      }
    });
  }

  handleOpenCamera(event: Camera) {
    if (event !== undefined)
      this.selectedCamera = Object.assign(event);
  }

  @Output()
  tileHasChanged: EventEmitter<Camera> = new EventEmitter();

  handleTileChanged(event: Camera) {
    this.tileHasChanged.emit(event);
  }
}