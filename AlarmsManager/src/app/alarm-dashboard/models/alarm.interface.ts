export interface Alarm{
    id: string;
    alertId : string;
    scalePoint : number;
    startLatitude: number;
    startLongitude: number;
    endLatitude: number;
    endLongitude: number;    
    alertType : string;
    startTime : string;
    endTime : string;
    speed : number;
    alertLevel : string;
}