import { Injectable } from '@angular/core';
import { Project } from '../shared/models/Project';
import { Observable } from 'rxjs';
import { ADD_PROJECT, CATHEGORIES_URL, CATHEGORIE_URL, GET_IDEA_URL, PROJECTS_URL, PROJECT_URL } from '../shared/models/constantes/urs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }
  getAll(){
    return this.http.get(PROJECTS_URL);
  }
  SaveProject(name:string){
    return this.http.post(ADD_PROJECT,name);
  }
  getAllCathegorie(){
    return this.http.get(CATHEGORIES_URL);
  }
  getAllFoodsBycathegorie(cet:string){
    if(cet == 'all'){
      return this.getAll() ;
    }
    return this.http.get(CATHEGORIE_URL+ cet);
  }
   getIdea(){
    return this.http.get(GET_IDEA_URL);
   }
  getProjectById(id:string){
   return this.http.get(PROJECT_URL +id) ;
  }
}