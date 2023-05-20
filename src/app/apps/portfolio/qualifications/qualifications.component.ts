import { Component } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent {
   imgsrrc  = "./../../../../assets/cute College bo 0.png";
  change(param:any){
    
    
    if (param = "school") {
      
      this.imgsrrc = "./../../../../assets/cute school kid 0.png";
    }else if (param = "collage"){
     
      this.imgsrrc = "./../../../../assets/cute College bo 0.png";
    }
  }
}
