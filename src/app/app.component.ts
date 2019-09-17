import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //must declare and type all new varibles
  title = 'MEAN';
  tasks = []
  task="" //needed to declare string varible 

  //examples:
  num: number
  randNum:number
  str: string
  first_name: string
  snacks: string[]
  loggedIn: boolean
  green = false
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    //this function gets called after init constructor
    this.getTasksFromService()
    

    //examples:
    this.num=23
    this.str="Hello World"
    this.randNum= Math.floor((Math.random()*5)+10)
    this.first_name = "Jeff"
    this.snacks = ["chips","meat pies","japadogs"]
    this.loggedIn = true
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data =>{
      console.log("got our data!",data)
      this.tasks = data['task']
    })
  }
  info(idx){
    this.task = this.tasks[idx]
    this.green = true
  }
};
