import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  userName: string;
  userRoles: string;



  constructor(public authService : AuthService) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem("username");
      this.userRoles = sessionStorage.getItem("roles");
  }

  logout(){


this.authService.logout();

  }







}
