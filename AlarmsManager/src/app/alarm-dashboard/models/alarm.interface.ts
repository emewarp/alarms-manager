export interface Alarm{
    id: string;
    alertId : string;
    km : number;
    startLatitude: number;
    startLongitude: number;
    endLatitude: number;
    endLongitude: number;    
    alertType : string;
    startTime : string;
    endTime : string;
    alertLevel : string;
}