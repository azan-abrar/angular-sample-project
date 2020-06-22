import { Component, OnInit } from '@angular/core';
import {TestService} from './../../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	categories = []
  selected_categories=[]
  sub_categories=[]
  constructor(private _demoService: TestService) { }

  ngOnInit(): void {
    this._demoService.getCategories().subscribe(
      data => { this.categories = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
    console.log(this.categories)
  }

  FieldsChange(event, cat: any){
  	let updateCategory = this.categories.find(x => x.id == cat.id)
  	let index = this.categories.indexOf(updateCategory);
  	this.categories[index].isChecked = event.currentTarget.checked
    this._demoService.getSubCategories(cat.id).subscribe(
      data => { this.sub_categories = data },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

  onClictEvent(){
  	this.selected_categories = this.selected_categories.concat(this.categories.filter(x => x.isChecked == true))
  	this.categories = this.categories.filter(x => x.isChecked == false)
  }
}
