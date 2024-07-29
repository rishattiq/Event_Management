import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event_booking_app';

  islogin:boolean=false

  @ViewChild ('model') model:ElementRef | undefined

  


  showLogin(){

    if(this.model){
      this.model.nativeElement.style.display = 'block'
    }
    
  }

  closeLogin(){

    if(this.model){
      this.model.nativeElement.style.display = 'none'
    }
    
  }
}
