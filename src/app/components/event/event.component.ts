import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../service/api.service';
import { Observable } from 'rxjs';
import { IEvent } from '../../model/event';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [AsyncPipe, CommonModule, DatePipe],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  ActivatedRoute = inject(ActivatedRoute);
  service = inject(APIService);
  eventData$: Observable<IEvent> = new Observable<IEvent>;

  constructor(){
    this.ActivatedRoute.params.subscribe((res:any)=>{
      this.eventData$ = this.service.getEventbyId(res.id);


    })
  }

  getEventDwtails(id:number){
   
    
  }

}
