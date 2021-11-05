import { Evenment } from 'src/models/Evenment.model';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

events : Evenment[] =[];
evenmentparam = null;

  constructor(private apiService:ApiService,private router: Router) { }

  ngOnInit(): void {



    this.apiService.getEvenments().subscribe(res=>{
     this.events=res.oblist;
    })
  }




  bynow(prodid:any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "evenmentparam": prodid.value
      }
    };
    this.router.navigate(["detailsevenment"], navigationExtras);
  }




}
