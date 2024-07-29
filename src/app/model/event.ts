export interface iAPI{

    message: string;
  result: boolean;
  data: any;
}

export interface IEvent
{
        eventId: number
        eventName: string
        startDate: string
        startTime: string
        endDate: string
        organizerName: string
        userId: number
        price: number
        location: string
        imageUrl: string
        organizerId: number
      }
      

export class User 
{
        UserId: number = 0
        Name: string = ""
        Email: string = ""
        Password: string = ""
        ContactNo: string = ""
        Role: string = ""
      
    }
      
