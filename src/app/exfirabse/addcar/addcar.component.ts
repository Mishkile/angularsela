import { Component } from '@angular/core';
import { Car } from 'src/app/car';
import { CarsService } from 'src/app/cars.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent {

  constructor(private fbs : CarsService) {}


  car : any = {}

  async addCar() {
   await this.fbs.addCar(this.car)
  }

}
