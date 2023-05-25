import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  constructor(private httpservice:HttpClient) { }
  getdata(){

    return this.httpservice.get('../../assets/certificate/learn.json');
    
  }
}
