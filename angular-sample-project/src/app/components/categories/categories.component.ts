import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories = [{id: 1, isChecked: false, image: '', name: "Health & Beauty"}, {id: 2, isChecked: false, image: '', name: "Home & Lifestyle"}, {id: 3, isChecked: false, image: '', name: "Women's Fashion"}, {id: 4, isChecked: false, image: '', name: "Men's Fashion"}, {id: 5, isChecked: false, image: '', name: "Electronic Devices"}, {id: 6, isChecked: false, image: '', name: "Electronic Accessories"}, {id: 7, isChecked: false, image: '', name: "Home Appliances"}, {id: 8, isChecked: false, image: '', name: "Kid's Wear"}, {id: 9, isChecked: false, image: '', name: "Sports Fitness"}, {id: 10, isChecked: false, image: '', name: "Watches, Bags and Jewelery"}, {id: 11, isChecked: false, image: '', name: "Groceries"}];
  selected_categories = []
  constructor() { }

  ngOnInit(): void {
  }

  FieldsChange(event, cat: any){
    let updateCategory = this.categories.find(x => x.id == cat.id)
    let index = this.categories.indexOf(updateCategory);
    this.categories[index].isChecked = event.currentTarget.checked
  }

  onClictEvent(){
    this.selected_categories = this.selected_categories.concat(this.categories.filter(x => x.isChecked == true))
    this.categories = this.categories.filter(x => x.isChecked == false)
  }

}
