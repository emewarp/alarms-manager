import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Camera } from './models/camera.interface';

const camera_API = 'http://localhost:3000/cameras';

@Injectable()
export class LivevideoDashboardService{
   
    constructor(private http: HttpClient){}

    getCameras(): Observable<Camera[]>{
        return this.http.get<Camera[]>(camera_API);
    }
}