import { Component } from '@angular/core';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.css']
})
export class ImpressionComponent {
  items = [
    { imageUrl: '../../../../assets/A Good Looking  1.png' },
    { imageUrl: '../../../../assets/mac-os-ventura-dark-5k-fe.jpg' },
    { imageUrl: '../../../../assets/A Good Looking  1.png' },
    // Add more items as needed
  ];

}
