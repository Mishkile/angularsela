import { Component } from '@angular/core';
import { Car } from 'src/app/car';
import { CarsService } from 'src/app/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {


constructor (private fbs : CarsService) {}


cars : Car[] = []


deleteCar(id : string) {
  this.fbs.deleteCar(id)
}

getAll() {
  this.fbs.getAll().subscribe(data => {
   this.cars =  data.map(car => {
      const id = car.payload.doc.id
      const carData = car.payload.doc.data() as Car
      const newCar = new Car()
      newCar.id = id
      newCar.model = carData.model
      newCar.year = carData.year
      newCar.color = carData.color
      return newCar

    })
  })
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getAll()
}

}
