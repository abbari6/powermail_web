import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../token/token-storage.service';
const Contact_api = 'http://localhost:8000/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private http: HttpClient,  private token: TokenStorageService) { }
//get all contacts
// contactUsers(){
//   //var userId =  this.token.getUserid();
//   return this.http.get(Contact_api+'contacts' );
// }
contactUsers(){
  var userId =  this.token.getUserid();
  return this.http.get(Contact_api+'list/'+userId );
}
//add contacts
addContact(data:any){
  return this.http.post(Contact_api +'addContact',data);
}
//update contact
putContact( id:number , data:any){
  return this.http.put(Contact_api+ 'updatecontact'+id , JSON.stringify(data))
}
//delete contact 
deleteContact( id:number){
  return this.http.delete(Contact_api+ 'contacts/' +id )
}
}
