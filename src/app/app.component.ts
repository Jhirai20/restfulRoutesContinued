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
  newTask: any;
  editTask: any;
  editTog: boolean = false;
  green = false
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    
    //this function gets called after init constructor
    this.getTasksFromService()
    this.newTask = { title: "", description: "", completed: false }
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask)
    observable.subscribe(data =>{
      console.log("-Create-",data)
      this.newTask = { title: "", description: "" }
    })
    this.getTasksFromService()
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
  delete(idx){
    let observable = this._httpService.getTasks()
    observable.subscribe(data =>{
      console.log("got our data!",data)
      this.tasks = data['task']
    })
  }
    onDelete(task){
      let observable = this._httpService.deleteTask(task);
      observable.subscribe(data => {
        console.log("~Delete~");
        this.getTasksFromService();
    })
  }

  editForm(task){
    this.editTask = {_id: task._id, title: task.title, description: task.description}
    this.editTog = true;
  }

  onEdit(){
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      console.log("~Edit~");
      this.editTog = false;
      this.getTasksFromService();
    })
  }
  // do($event){
  //   console.log($event)
  // }
  // onButtonClick(): void { 
  //   console.log(`Click event is working`);
  // }
  // onButtonClickParam(num: Number): void { 
  //     console.log(`Click event is working with num param: ${num}`);
  //     let observable = this._httpService.postToServer({data:num})
  //     observable.subscribe(data => console.log("Got out data!", data))
  // }
  // onButtonClickParams(num: Number, str: String): void { 
  //     console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }
  // onButtonClickEvent(event: any): void { 
  //     console.log(`Click event is working with event: ${event}`);
  // }
};
