import { Component, OnInit } from '@angular/core';
import { APIService } from '../../service/api.service';
import { inject } from '@angular/core';
import { iAPI, IEvent } from '../../model/event';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  eventList: IEvent[]=[]
  service = inject(APIService)

  constructor(){

    
  }

ngOnInit(){

  this.getEvents()
  
}

getEvents()
{
  this.service.getAllEvents().subscribe((res:iAPI)=>{
  this.eventList=res.data
  })
}

}
