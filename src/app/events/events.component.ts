import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  signinuser : string;

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

  logout(){


this.authService.logout();

  }







}
