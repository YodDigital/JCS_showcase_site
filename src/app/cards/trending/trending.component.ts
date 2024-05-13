import { Component, HostListener, Input } from '@angular/core';
import { Trending } from 'src/app/Models/trending';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {

  @Input() item!: Trending;
  isHover = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.isHover = true;
}
    
@HostListener('mouseleave') onMouseLeave() {
  this.isHover = false;
}
}
