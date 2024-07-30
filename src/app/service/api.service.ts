import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iAPI, IEvent, User } from '../model/event';
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



   getEventbyOrganizerId(OrganizerId: number){

    return this.http.get<IEvent>(`${this.apiUrl}/GetEventsByOrganizer?organizerId=${OrganizerId}`).pipe(
      map((res: any) => {
        return res.data;
      })
  )
   }

   getRegister(obj:User){
    return this.http.post<iAPI>(`${this.apiUrl}/CreateUser`,obj)
   }

   login(obj:any){
    return this.http.post<iAPI>(`${this.apiUrl}/Login`,obj)
   }
}
