import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createCategoryToServer(){

  }

  getCategoryFromServer(id=''){
    return this.http.get(`${environment.baseApiUrl}/user/cat?id=${id}`);
  }

  createCategoriesToServer(level1,level2,level3,level4){
    return this.http.post(`${environment.baseApiUrl}/user/cats`,{level1,level2,level3,level4});
  }
}
