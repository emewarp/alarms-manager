import { Component, ChangeDetectorRef } from '@angular/core';

import { Alarm } from './alarm-dashboard/models/alarm.interface';
import { Camera } from './livevideo-dashboard/models/camera.interface';
import { KmPointDto } from './models/km-point-dto.interface';
import { KmRangeDto } from './models/km-range-dto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alarms Manager';

  constructor(private cd: ChangeDetectorRef){ }

kmPointDto: KmPointDto = {} as KmPointDto;
kmRangeDto: KmRangeDto = {} as KmRangeDto;

handleOpenCamera(event: Alarm){   
  var dto = { km: event.km} as KmPointDto;
  this.kmPointDto = Object.assign(dto);
}

handleTileChanged(event: Camera){  
  this.kmRangeDto = Object.assign(
    { startKmPoint: event.startingKmPoint, endKmPoint: event.endingKmPoint } as KmRangeDto
  );
  this.cd.detectChanges();
}
}
