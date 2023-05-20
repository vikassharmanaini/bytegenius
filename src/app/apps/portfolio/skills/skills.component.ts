import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
   items = ["ok","d","Ss","d","d","",""];
    widget = 0;
   now  = new Date();
   day = ['Sun','Mun','Tue','Wed','Thu','Fri','Sat']
   months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   hour = (this.now.getHours()>12)?(this.now.getHours()%12):this.now.getHours();
   time= (this.now.getHours()>12)?"PM":"AM"
  convert(num:any){
    return (num<10)?"0"+num:num;
  }
  ngOnInit(): void {

  }
  ite = document.getElementsByClassName('card');
  next(){
    if (this.widget<this.items.length) {
     
    }
  }
  before(){
    if (this.widget>0) {
     
    }
  }

}
