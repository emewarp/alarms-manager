import { Input, Output, EventEmitter, Component } from '@angular/core';
import { Camera } from '../../models/camera.interface';

@Component({
  selector: 'livevideo-cameras',
  styleUrls: ['livevideo-cameras.component.scss'],
  templateUrl: './livevideo-cameras.component.html'
})

export class LiveVideoCamerasComponent{

    @Input()
    cameraList: Camera[];

    @Output()
    openCamera: EventEmitter<Camera> = new EventEmitter();
    onOpenCamera(camera: Camera): void{
      this.openCamera.emit(camera);
    } 
}