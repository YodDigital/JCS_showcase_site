import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor() {}

  getTrending() {
    return [
      {
        name: 'Mugs',
        description: 'Lorem amet aute exercitation velit consequat consequat fugiat pariatur.',
        image: 'assets/img/mug.png',
      },
      { name: 'Flyers', description: 'Ullamco ad sit commodo et ullamco sunt consequat anim adipisicing.', image: 'assets/img/flyer.png' },
      { name: 'Business cards', description: 'Dolore aliqua est do in non nostrud amet amet do irure sit culpa laboris.', image: 'assets/img/bcard.png' },
    ];
  }
}
