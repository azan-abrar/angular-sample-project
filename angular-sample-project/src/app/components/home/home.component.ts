import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	data_array = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() { }

  ngOnInit(): void {
  }

  onClictEvent(data){
  	if (data == 'Bombasto'){
  		let index = this.data_array.indexOf("Bombasto");
  		this.data_array[index] =  "Change Bombasto"
  	}
  	console.log(a)
  }
}
