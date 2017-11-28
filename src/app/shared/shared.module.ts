import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginInlineComponent } from './login-inline/login-inline.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarouselSlideComponent, CarouselComponent, LoginInlineComponent],
  exports: [CarouselComponent, CarouselSlideComponent, LoginInlineComponent]
})
export class SharedModule { }
