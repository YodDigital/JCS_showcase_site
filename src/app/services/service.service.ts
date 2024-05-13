import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  getServices() {
    return [
      {
        name: 'JCS Store',
        image: 'assets/img/jcss.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut.',
      },
      {
        name: 'JCS Print solultion',
        image: 'assets/img/jcs.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut.',
      },
      {
        name: 'JCS Enterprise Communication',
        image: 'assets/img/jcs.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut.',
      },
      {
        name: 'JCS Electronics',
        image: 'assets/img/jcs.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut.',
      },
      {
        name: 'JCS Graphics',
        image: 'assets/img/jcs.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut.',
      },
    ];
  }

  getPartners() {
    return [
      {
        image: 'assets/img/JCS-LOGO.png',
      },
      {
        image: 'assets/img/JCS-LOGO.png',
      },
      {
        image: 'assets/img/JCS-LOGO.png',
      },
      {
        image: 'assets/img/JCS-LOGO.png',
      },
      {
        image: 'assets/img/JCS-LOGO.png',
      },
    ];
  }

  getTestimonials() {
    return [
      {
        image: 'assets/img/testimonial.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut.',
        name: 'John Doe',
      },
      {
        image: 'assets/img/testimonial.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut.',
        name: 'John Doe',
      },
      {
        image: 'assets/img/testimonial.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut.',
        name: 'John Doe',
      },
      {
        image: 'assets/img/testimonial.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut.',
        name: 'John Doe',
      },
    ];
  }

  getTeam() {
    return [
      {
        name: 'John Doe',
        role: 'Marketing director',
        description: 'Proident excepteur sunt ullamco dolore commodo.',
        image: 'assets/img/team.png',
      },
      {
        name: 'John Doe',
        role: 'Marketing director',
        description: 'Proident excepteur sunt ullamco dolore commodo.',
        image: 'assets/img/team.png',
      },
      {
        name: 'John Doe',
        role: 'Marketing director',
        description: 'Proident excepteur sunt ullamco dolore commodo.',
        image: 'assets/img/team.png',
      },
    ];
  }
}
