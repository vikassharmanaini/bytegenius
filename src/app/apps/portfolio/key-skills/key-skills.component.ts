import { Component } from '@angular/core';

@Component({
  selector: 'app-key-skills',
  templateUrl: './key-skills.component.html',
  styleUrls: ['./key-skills.component.css',
  '../../../../assets/n/style.css',
]
})
export class KeySkillsComponent {
   now = new Date();
  time= (this.now.getHours()>12)?"PM":"AM"
  convert(num:any){
    
    return (num<10)?"0"+num:num;
  }
  skills=["Proficient in Popular Programming Languages, Software, and Tools",'Strong problem-solving skills and ability to work under pressure','Excellent communication and interpersonal skills','Strong attention to detail and ability to multitask'];
  hour = (this.now.getHours()>12)?(this.now.getHours()%12):this.now.getHours();
  ngOnInit(): void {
    
  }
}
