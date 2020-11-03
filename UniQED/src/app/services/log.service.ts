import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http:HttpClient) { }
  baseUri="http://localhost:3000";

  getStudentRecord(){
    //console.log(data);
    return this.http.get(this.baseUri+'/student')
    
  }

  getCourse(data){
    //console.log(data);
    return this.http.get(this.baseUri+'/'+data)
    
  }




}
