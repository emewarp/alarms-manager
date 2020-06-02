import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alarm } from './models/alarm.interface';
import { Heartbeat } from '../models/heartbeat.interface';

const alarm_API = 'http://localhost:3000/alarms';
const heartbeat_API = 'http://localhost:3000/heartbeats';

@Injectable()
export class AlarmDashboardService{
   
    constructor(private http: HttpClient){}

    getAlarms(): Observable<Alarm[]>{
        return this.http.get<Alarm[]>(`${alarm_API}?_sort=id&_order=desc`);
    }

    clearAlarm(alarm: Alarm): Observable<Alarm>{
        return this.http
        .delete<Alarm>(`${alarm_API}/${alarm.id}`);
    } 

    getHeartbeats(): Observable<Heartbeat[]>{
        return this.http.get<Heartbeat[]>(heartbeat_API);
    }
    
}