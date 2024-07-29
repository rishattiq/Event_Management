import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { MyBookingComponent } from './components/my-booking/my-booking.component';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },

    {
        path: "home",
        component: HomeComponent
    },

    {
        path: "event/:id",
        component: EventComponent
    },

    {
        path: "mybookings",
        component: MyBookingComponent
    }

];
