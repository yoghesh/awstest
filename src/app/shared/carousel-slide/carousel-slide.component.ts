import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
import { CarouselComponent, Direction } from '../carousel/carousel.component'

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.css']
})
export class CarouselSlideComponent implements OnInit, OnDestroy {

  @Input() public index: number;
  @Input() public direction: Direction;
  @HostBinding('class.active')
  @Input() public active: boolean;

  @HostBinding('class.item')
  @HostBinding('class.carousel-item')
  @Input() private addClass: boolean = true;



  constructor(private _carousel: CarouselComponent) { }

  ngOnInit() {
    this._carousel.addSlide(this);
  }

  ngOnDestroy() {
    this._carousel.removeSlide(this);
  }

}
