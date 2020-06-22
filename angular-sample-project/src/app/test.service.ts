import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TestService {
	constructor(private http:HttpClient) {
	}

	ngOnInit() {
  }

  getCategories() {
  	return this.http.get('http://localhost:3000/categories.json');
  }

  getSubCategories(category_id){
  	return this.http.get("http://localhost:3000/categories/"+category_id+"/sub_categories.json");
  }
}
