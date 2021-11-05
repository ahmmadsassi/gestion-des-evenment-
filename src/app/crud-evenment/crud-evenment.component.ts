import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Evenment } from 'src/models/Evenment.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crud-evenment',
  templateUrl: './crud-evenment.component.html',
  styleUrls: ['./crud-evenment.component.css']
})
export class CrudEvenmentComponent implements OnInit {
  evenments: Evenment[] = [];
  fileToUpload: File = null;
  showAdd = false;
  auth: string;
  constructor(private api: ApiService, private router: Router) { }
  imageUrl: string = "/assets/img/noimage.png";
  ngOnInit() {
    this.api.getEvenments().subscribe(
        res => {
          this.evenments = res.oblist;
        }
      );
    }


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  show() {
    this.showAdd = true;
  }
  hide() {
    this.showAdd = false;
  }
  addevenment(name:any,type:any,adress:any,dateevenment:any,prix:any,nbrp:any,image:any) {
    this.api.addevenment(name.value,type.value,adress.value,dateevenment.value,prix.value,nbrp.value,this.fileToUpload).subscribe(res => {
      this.evenments= res.oblist;
    });
  }



  deleve(evedid:any) {

    this.api.deleteProduct(evedid.value).subscribe(res => {
      this.evenments = res.oblist;
      this.ngOnInit();
    });

  }
  edit(prodid:any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "evenmentparam": prodid.value
      }
    };
    this.router.navigate(["edit"], navigationExtras);
  }
}
function show() {

  throw new Error('Function not implemented.');
}

function handleFileInput(file: any, FileList: { new(): FileList; prototype: FileList; }) {
  throw new Error('Function not implemented.');
}

