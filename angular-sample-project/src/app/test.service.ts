import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': '14af8d978e6a04b6de2797edb1edcac81bebd556a31653f7e699fda7c2fa196a527cb3637d3b5b90de03c6bc30c6253ffb1c56dc47b41fd8448624605b8d9cc2' })
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
  	return this.http.get('http://localhost:3000/categories.json',httpOptions);
  }

  getSubCategories(category_id){
  	return this.http.get("http://localhost:3000/categories/"+category_id+"/sub_categories.json",httpOptions);
  }
}
