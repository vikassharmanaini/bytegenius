import { Component, ElementRef, ViewChild } from '@angular/core';
import { __classPrivateFieldGet } from 'tslib';
import { LearnService } from '../../../service/learn.service'
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
  i=0;
  itech=0;
  data :any;

  constructor(private learn:LearnService){}

  ngOnInit(): void {
    this.learn.getdata().subscribe(res=>{

      this.data = res;
      console.log(this.data);
      
    })
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
  convertMap(k:any,v:any){
    return new Map([ [k,k]]);
  }
  update(a:number,param:number){
    if (param==1) {
      this.itech=a;
    }else{
      this.i=a;
      this.itech=0;
    }

  }

}
