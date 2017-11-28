import { Component, OnInit } from '@angular/core';
import { LoginInlineComponent } from '../shared/login-inline/login-inline.component'

export class slideData
{
  public image:string;
  public text:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

private slideInterval:number=3000;
private noLoop:boolean=false;
private slides:Array<slideData> = [];

  constructor() { this.addSlides();}

private addSlides()
{
  this.slides.push({image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'});
}
}
