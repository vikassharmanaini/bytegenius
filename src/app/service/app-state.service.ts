import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  title:String = "ByteGenious"
  
  constructor() { }
  
  getTitle():String{
    return this.title;
  }
  setTitle(title:String):void{
    this.title = title;
  }
}
