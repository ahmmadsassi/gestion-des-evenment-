import { Evenment } from './../../models/Evenment.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editevenment',
  templateUrl: './editevenment.component.html',
  styleUrls: ['./editevenment.component.css']
})
export class EditevenmentComponent implements OnInit {
  evenment: Evenment = {
    id : 0,
    nom : null,
 date : null,
 type : null ,
 adresse : null,
  prix : 0.0,
  place_disp : 0 ,
 imageevenment: null

  };
  Evenments: Evenment[] = [];
  fileToUpload: File = null;
  eveid: string;
  imageUrl: string = "/assets/img/noimage.png"

  constructor(private route: ActivatedRoute, private api: ApiService,private router: Router) {
    this.api.getEvenments().subscribe(
      res => {
        res.oblist.forEach(evenmentb => {
          if (evenmentb.id == this.eveid) {
            this.evenment = evenmentb;
            this.fileToUpload = evenmentb.imageevenment;
          }
        });
      }
    );
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.eveid = params["evenmentparam"];
    })
  }


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

updateevenment(name:any,type:any,adress:any,dateevenment:any,prix:any,nbrp:any,image:any){
this.api.updateProduct(name.value,type.value,adress.value,dateevenment.value,prix.value,nbrp.value,this.fileToUpload,this.evenment.id).subscribe(res=>{

console.log(res);
this.router.navigate(["ajout"]);
})
}










}
