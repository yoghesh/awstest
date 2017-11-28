import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgFor } from '@angular/common'
import { CarouselSlideComponent } from '../carousel-slide/carousel-slide.component'

export enum Direction { UNKNOWN, NEXT, PREV }

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() public noWrap: boolean;
  @Input() public noPause: boolean;
  @Input() public noTransition: boolean;

  @Input() public get interval(): number {
    return this._interval;
  }

  public set interval(value: number) {
    this._interval = value;
    this.resetTimer();
  }

  private slides: Array<CarouselSlideComponent> = [];
  private currentInterval: any;
  private isPlaying: boolean;
  private destroyed: boolean = false;
  private currentSlide: CarouselSlideComponent;
  private _interval: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

  public select(nextSlide: CarouselSlideComponent, direction: Direction = Direction.UNKNOWN) {
    let nextIndex = nextSlide.index;
    if (direction == Direction.UNKNOWN) {
      direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
    }

    if (nextSlide && nextSlide != this.currentSlide) {
      this.goNext(nextSlide, direction);
    }
  }

  private goNext(slide: CarouselSlideComponent, direction: Direction) {
    if (this.destroyed)
    { return; }
    slide.direction = direction;
    slide.active = true;

    if (this.currentSlide) {
      this.currentSlide.direction = direction;
      this.currentSlide.active = false;
    }

    this.currentSlide = slide;
    this.restartTimer();
  }

  private getSlideByIndex(index: number) {
    let len = this.slides.length;
    for (let i = 0; i < len; i++) {
      if (this.slides[i].index == index)
      { return this.slides[i]; }
    }
  }

  private getCurrentIndex() {
    return this.currentSlide ? this.currentSlide.index : 0;
  }

  private next() {
    let newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
    if (newIndex == 0 && this.noWrap) {
      this.pause();
      return;
    }
    return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
  }

  private prev() {
    let newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;
    if (this.noWrap && newIndex == this.slides.length - 1) {
      this.pause();
      return;
    }
    return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
  }

  private restartTimer() {
    this.resetTimer();
    let interval = +this.interval;
    if (!isNaN(interval) && interval > 0) {
      this.currentInterval = setInterval(() => {
        let nInterval = +this.interval;
        if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
          this.next();
        }
        else { this.pause(); }
      }, interval);
    }

  }

  private resetTimer() {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
      this.currentInterval = null;
    }
  }

  public play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.restartTimer();
    }
  }

  public pause() {
    if (!this.noPause) {
      this.isPlaying = false;
      this.resetTimer();
    }
  }

  public addSlide(slide: CarouselSlideComponent) {
    slide.index = this.slides.length;
    this.slides.push(slide);
    if (this.slides.length === 1 || slide.active) {
      this.select(this.slides[this.slides.length - 1]);
      if (this.slides.length === 1)
      { this.play(); }
    }
    else { slide.active = false; }
  }

  public removeSlide(slide: CarouselSlideComponent) {
    this.slides.splice(slide.index, 1);
    if (this.slides.length === 0) {
      this.currentSlide = null;
      return;
    }
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].index = i;
    }
  }
}
