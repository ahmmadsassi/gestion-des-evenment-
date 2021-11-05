import { inscription } from './../../models/inscription.model';
import { Evenment } from './../../models/Evenment.model';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evenmentdetails',
  templateUrl: './evenmentdetails.component.html',
  styleUrls: ['./evenmentdetails.component.css']
})
export class EvenmentdetailsComponent implements OnInit {

evenment : Evenment;
eveid:string;
Evenments: Evenment[] = [];
ins :inscription;
listin : inscription[];
totalSum: number = 0;
nbpassets : number =0;
evenmentprixts : number=0;



  constructor(private api : ApiService,private router :Router,private route: ActivatedRoute) {

this.api.getEvenments().subscribe(res=>{
    res.oblist.forEach(evenmentb => {
      if (evenmentb.id == this.eveid) {
        this.evenment = evenmentb;
      }
    });});

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.eveid = params["evenmentparam"];
      })
  }


  reserver(nbpass:any,ideve:any,evenmentprix:any){
   this.nbpassets=nbpass.value;
   this.evenmentprixts=evenmentprix.value
    console.log(nbpass.value)
    console.log(ideve.value)
    console.log(evenmentprix.value)
    console.log(this.totalSum)
      this.totalSum = this.nbpassets*this.evenmentprixts;
       this.api.addinscription(nbpass.value,this.totalSum,1,ideve.value).subscribe(res=>{
   this.listin = res.inlist();
   })
   }



}
