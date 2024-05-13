import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Models/service';
import { Team } from 'src/app/Models/team';
import { Testimonial } from 'src/app/Models/testimonial';
import { Trending } from 'src/app/Models/trending';
import { ServiceService } from 'src/app/services/service.service';
import { TrendingService } from 'src/app/services/trending.service';

// import * as M from 'materialize-css';
declare const M: any;
// import 'materialize-css/dist/js/carousel';
// import { HttpClient } from '@angular/common/http' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './materialize.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  services!: Service[];
  trending!: Trending[];
  partners!: any[];
  testimonials!: Testimonial[];
  team!: Team[];

  // options = { fullWidth: false };
  items = [
    'https://picsum.photos/200/300?image=0',
    'https://picsum.photos/200/300?image=1',
    'https://picsum.photos/200/300?image=2',
    'https://picsum.photos/200/300?image=3',
    'https://picsum.photos/200/300?image=4',
  ];

  hrefs = ['one', 'two', 'three', 'four', 'five'];

  constructor(private service: ServiceService, private serviceT: TrendingService) {}

  ngOnInit() {
    this.services = this.service.getServices();
    this.trending = this.serviceT.getTrending();
    this.partners = this.service.getPartners();
    this.testimonials = this.service.getTestimonials();
    this.team = this.service.getTeam();
  }

  ngAfterViewInit(): void {
    // no errors
    let elems = document.querySelectorAll('.carousel');
    const options = {
      fullWidth: false
    };
    M.Carousel.init(elems, options);

  };
  
}
