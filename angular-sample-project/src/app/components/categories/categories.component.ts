import { Component, OnInit, NgModule } from '@angular/core';
import {TestService} from './../../test.service';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories = []
  selected_categories=[]
  sub_categories=[]
  constructor(private _demoService: TestService) { }

  ngOnInit(): void {
    this._demoService.getCategories().subscribe(
      data => { this.setCategories(data) },
      err => console.error(err),
      () => console.log('done loading foods')
    );
    console.log(this.categories)
  }

  FieldsChange(event, cat: any){
    let updateCategory = this.categories.find(x => x.id == cat.id)
    let index = this.categories.indexOf(updateCategory);
    this.categories[index].attributes.status = event.currentTarget.checked
    this._demoService.getSubCategories(cat.id).subscribe(
      data => { this.setSubCategories(data)  },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

  onClictEvent(){
    this.selected_categories = this.selected_categories.concat(this.categories.filter(x => x.attributes.status == true))
    this.categories = this.categories.filter(x => x.attributes.status == false)
  }

  setCategories(categories){
    if(categories.errors){
      alert(categories.errors)
    }else{
      this.categories = categories.data
    }
  }

  setSubCategories(sub_categories){
    if(sub_categories.errors){
      alert(sub_categories.errors)
    }else{
      this.sub_categories = sub_categories.data
    }
  }

}
