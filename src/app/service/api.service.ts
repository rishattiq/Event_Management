import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iAPI, IEvent } from '../model/event';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  apiUrl: string = "http://freeapi.miniprojectideas.com/api/EventBooking"

  constructor(private http : HttpClient) {

   }

   getAllEvents(){
    return this.http.get<iAPI>(`${this.apiUrl}/GetAllEvents`)
   }

   getEventbyId(eventId:number){
    return this.http.get<IEvent>(`${this.apiUrl}/GetEventById?id=${eventId}`).pipe(
      map((res: any) => {
        return res.data;
      })
  )
   }
}
