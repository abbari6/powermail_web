import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';

@Component({
  selector: 'app-inner-navbar',
  templateUrl: './inner-navbar.component.html',
  styleUrls: ['./inner-navbar.component.css']
})
export class InnerNavbarComponent implements OnInit {
  isSignedIn: boolean;
  name: String;
 constructor( private token: TokenStorageService , private router: Router) {
  this.name = this.token.getname(); 
  //console.log(this.name);
   
  }
  
  ngOnInit(): void {

  
  }
  logout(){
    this.token.removeToken();
    this.router.navigate(['/login'])
  }
   
}
