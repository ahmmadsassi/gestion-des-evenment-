import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


// Fetching all the products
getEvenments(): Observable<any> {
  return this.http.get<any>(environment.baseUrl+environment.evenmentUrl);
}


// Add product in the system
addevenment( nom : string  ,
  date : string ,
  type : string ,
  adresse : string ,
  prix : any,
  place_disp : any ,
  imageevenment: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append("nom", nom);
  formData.append("date", date);
  formData.append("type", type);
  formData.append("adresse", adresse);
  formData.append("prix", prix);
  formData.append("place_disp", place_disp);
  formData.append("file", imageevenment);
  return this.http.post<any>(environment.baseUrl+environment.addevenmentUrl, formData);

}

addinscription( nbpass : any ,
  total : any ,
  iduser : any ,
  ideve : any ): Observable<any> {
  const formData: FormData = new FormData();
  formData.append("nbpass", nbpass);
  formData.append("total", total);
  formData.append("iduser", iduser);
  formData.append("ideve", ideve);

  return this.http.post<any>(environment.baseUrl+environment.addinscription, formData);


}

















// update Product for Logged Admin User
updateProduct(nom : string  ,
  date : string ,
  type : string ,
  adresse : string ,
  prix : any,
  place_disp : any ,
  imageevenment: File, id:any): Observable<any> {
  const formData: FormData = new FormData();
  formData.append("nom", nom);
  formData.append("date", date);
  formData.append("type", type);
  formData.append("adresse", adresse);
  formData.append("prix", prix);
  formData.append("place_disp", place_disp);
  formData.append("file", imageevenment);
  formData.append("id",id);
  return this.http.put<any>(environment.baseUrl+environment.updateevenmentUrl, formData);
}

// delete Product
deleteProduct(prodid: number) {
  return this.http.delete<any>(environment.baseUrl+environment.deleteevenmentUrl +"?id=" + prodid);
}





























}
