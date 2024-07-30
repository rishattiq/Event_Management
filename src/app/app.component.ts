import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {iAPI, User} from './model/event';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { APIService } from './service/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event_booking_app';

  islogin:boolean=false

  userObj: User=new User()

  loginObj={
    
      "Password": "",
      "ContactNo": ""
    }
  

  @ViewChild ('model') model:ElementRef | undefined

 http = inject(HttpClient)
 service = inject(APIService)


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

  onRegister(){
    this.service.getRegister(this.userObj).subscribe((res:iAPI)=>{

      if(res.result){
        alert("successfully registered")
        this.closeLogin();
      }
      else{
        alert(res.message)
      }

    })
  }
  
  onlogin(){
    this.service.login(this.loginObj).subscribe((res:iAPI)=>{
      if(res.result){
        alert("successfully login")
        localStorage.setItem('eventUser' , JSON.stringify(res.data))
        this.closeLogin()
      }
      else{
        alert(res.message)
      }

    })
  }
}
