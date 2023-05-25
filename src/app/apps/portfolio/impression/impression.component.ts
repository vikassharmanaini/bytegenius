import { Component } from '@angular/core';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.css']
})
export class ImpressionComponent {
  certificate= [
    "../../../../assets/certificate/java_basic certificate_page-0001.jpg",
    "../../../../assets/certificate/internship_certificate_page-0001.jpg",
    "../../../../assets/certificate/_uploads_stu_certificate_33_page-0001.jpg",
    "../../../../assets/certificate/88666744_page-0001.jpg",
    "../../../../assets/certificate/87410404_page-0001.jpg"
  ]
  i = 0;
  next(){
    if (this.i<this.certificate.length-3) {
      this.i++;
    }
  }
  before(){
    if (this.i>0) {
      this.i--;
    }
  }

}
