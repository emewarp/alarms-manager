import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, OnChanges, Output, EventEmitter } from '@angular/core';

import { Camera } from '../../models/camera.interface';

// Declara a lib do videojs como externa ao angular
declare let videojs: any;

@Component({
  selector: 'livevideo-tile',
  styleUrls: ['livevideo-tile.component.scss'],
  templateUrl: './livevideo-tile.component.html'
})

export class LivevideoTileComponent implements OnInit, OnChanges, AfterViewInit {

  constructor(private hostElement: ElementRef) {
  }

  poster = 'assets/img/picture.png';
  videoUrl = 'http://72.48.231.13/mjpg/video.mjpg';
  
  @ViewChild('myvid') vid: ElementRef;

  @Input()
  camera: Camera;

  videoFrame;

  @Output()
  tileChanged: EventEmitter<Camera> = new EventEmitter();

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.videoFrame = this.hostElement.nativeElement.querySelector('iframe');
    if (this.camera !== undefined) {      
      this.videoUrl = this.camera.url;
      this.poster = this.camera.url.replace('httppreview','picture');
      
      this.tileChanged.emit(this.camera);
    }
  }

  ngOnChanges() {
    this.videoFrame = this.hostElement.nativeElement.querySelector('iframe');
    if (this.camera !== undefined) {
      
      this.videoUrl = this.camera.url;
      this.poster = this.camera.url.replace('httppreview','picture');

      this.tileChanged.emit(this.camera);
    }
  }
}