import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks()
   }
   getTasks(){
    //  let tempObservable = this._http.get('/tasks')
    //  tempObservable.subscribe(data => console.log("Got our tasks!", data))
    return  this._http.get('/tasks')
   }
  //  postToServer(num){
  //    return this._http.post('/tasks',num)
  //  }
  getTaskById(id:string){
    return this._http.get("/tasks/:id")
  }
  addTask(newtask){
    return this._http.post("/tasks", newtask)
  }
  removeTask(id:string){
    return this._http.delete("/tasks/:id" )
  }
  editTask(editTask){
    return this._http.put(`/tasks/${editTask._id}`, editTask);
  }
  deleteTask(task){
    return this._http.delete(`/tasks/${task._id}`, task);
  }
}; 
