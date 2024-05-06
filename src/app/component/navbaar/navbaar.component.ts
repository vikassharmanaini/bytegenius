import { Component } from '@angular/core';
import {AppStateService } from '../../service/app-state.service'
@Component({
  selector: 'app-navbaar',
  templateUrl: './navbaar.component.html',
  styleUrls: ['./navbaar.component.css']
})
export class NavbaarComponent {
  isNavbarExpanded: boolean = false;
  constructor(private appservice:AppStateService){
  }
  title:String=this.appservice.getTitle();
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  toggleNavbar( ): void {
    console.log("working");
    
    this.isNavbarExpanded = !this.isNavbarExpanded.valueOf;
  }
}
