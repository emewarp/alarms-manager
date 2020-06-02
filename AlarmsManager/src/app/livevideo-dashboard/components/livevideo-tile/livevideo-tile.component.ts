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

  // Titulo do component
  // title = 'Player com Video.JS';
  // // Instancia do video.js.
  // vidObj: any;
  // // Poster para ser usado no video.js
  poster = 'assets/img/picture.png';
  // URL do video a ser reproduzido.
  //videoUrl = 'http://ismlite@iscals1!@192.168.20.120/ISAPI/Streaming/channels/101/httppreview';
  videoUrl = 'http://72.48.231.13/mjpg/video.mjpg';
  
  // Acessa o elemento video do html5 via viewchild.
  @ViewChild('myvid') vid: ElementRef;


  @Input()
  camera: Camera;

  videoFrame;

  @Output()
  tileChanged: EventEmitter<Camera> = new EventEmitter();

  ngAfterViewInit() {
    // const options = {
    //   controls: true,
    //   autoplay: true,
    //   preload: 'auto',
    //   hasCredentilas:true,
    //   techOrder: ['html5']
    // };

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