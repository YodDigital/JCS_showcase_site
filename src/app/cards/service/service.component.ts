import { Component, Input } from '@angular/core';
import { Service } from 'src/app/Models/service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  @Input() serviceProp!: Service;

  ngOnInit() {
    // this.serviceProp= this.service.getServices();

  }

}
