import { Component,inject } from '@angular/core';
import { MOVIE } from '../../mocks/mock-movie';
import { Movie } from '../../interfaces/movie';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent {
  
  constructor( private router: Router, private _snackBar: MatSnackBar){}
  movies = MOVIE;

  ticketService: TicketService = inject(TicketService)
  selectedMovie ?:Movie;

  movieTime ?: any;
  ticketAdults ?: number = 0;
  ticketChild ?: number = 0;
  email?: string;
  firstName?: string;
  lastName?: string;

  // function on select movie --> get all data from movie
  onSelect(movie: Movie): void{
    this.selectedMovie = movie;
  }

  // format date time
  onFormatTime(date: Date | undefined): string{
    return `${date?.getDate()}/${date?.getMonth()}/${date?.getFullYear()}`;
  }

  // clear input 
  clear(): void{
   this.ticketAdults = 0
   this.ticketChild = 0
   this.movieTime = ''
   this.email = ''
   this.firstName = ''
   this.lastName = ''
  }

  // function save from input
  submit(): void{
    // check if not value
    if(!this.selectedMovie?.name || this.movieTime == '' || (this.ticketAdults == 0 && this.ticketChild == 0) || this.email == '' || this.firstName == '' || this.lastName == ''){
        this.openSnackBar("Please fill all value", "Dismiss");
    }else{
      this.ticketService.addTicket(
        {movieName: this.selectedMovie?.name, movieDate: this.onFormatTime(this.selectedMovie?.time), movieTime: this.movieTime, ticketAdults: this.ticketAdults, ticketChild: this.ticketChild, email: this.email, firstName: this.firstName, lastName: this.lastName }
      );
      this.router.navigate(['/summary'])
    }
  }

  // validation only number in input
  validateNumber(event: any): boolean{
    const charCode = (event.which) ? event.which: event.keyCode
    
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      return false;
    }
    return true;
  }

  // open snack Bar
  openSnackBar(message: string, action: string): void{
    this._snackBar.open(message, action)
  }
}
