import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  title = 'JCS_showcase_site';
  mobile = false;
  public getScreenWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);
    this.getScreenWidth <= 480? this.mobile = true : this.mobile = false;
     // 768px portrait
    
    console.log(this.mobile);
  }
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenWidth <= 480? this.mobile = true : this.mobile = false;
  }
}
