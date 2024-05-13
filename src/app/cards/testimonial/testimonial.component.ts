import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/Models/testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  @Input() testimonial! : Testimonial

}
