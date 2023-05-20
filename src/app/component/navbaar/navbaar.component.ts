import { Component } from '@angular/core';

@Component({
  selector: 'app-navbaar',
  templateUrl: './navbaar.component.html',
  styleUrls: ['./navbaar.component.css']
})
export class NavbaarComponent {
  isNavbarExpanded: boolean = false;

  toggleNavbar(): void {
    // console.log(":he");
    
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }
}
