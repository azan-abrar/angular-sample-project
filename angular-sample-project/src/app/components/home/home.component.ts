import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	categories = [{id: 1, isChecked: false, image: '', name: "Health & Beauty"}, {id: 2, isChecked: true, image: '', name: "Home & Lifestyle"}, {id: 3, isChecked: false, image: '', name: "Women's Fashion"}, {id: 4, isChecked: false, image: '', name: "Men's Fashion"}, {id: 5, isChecked: false, image: '', name: "Electronic Devices"}, {id: 6, isChecked: false, image: '', name: "Electronic Accessories"}, {id: 7, isChecked: false, image: '', name: "Home Appliances"}, {id: 8, isChecked: false, image: '', name: "Kid's Wear"}, {id: 9, isChecked: false, image: '', name: "Sports Fitness"}, {id: 10, isChecked: false, image: '', name: "Watches, Bags and Jewelry"}, {id: 11, isChecked: false, image: '', name: "Groceries"}];
  constructor() { }

  ngOnInit(): void {
  }

  FieldsChange(event, cat: any){		
  }
}
