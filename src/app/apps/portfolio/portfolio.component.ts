import { Component } from '@angular/core';
import  { AppStateService } from '../../service/app-state.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  
  constructor(private appState:AppStateService ){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appState.setTitle("PortFolio");
  }
}
