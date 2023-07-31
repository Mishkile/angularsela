import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Car } from './car';
@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private afs: AngularFirestore) {}

  getAll() {
    return this.afs.collection('cars').snapshotChanges();
  }

   addCar(car : any) {
   return this.afs.collection("cars").add(car)
  }

  deleteCar(id : string) {
   return this.afs.collection("cars").doc(id).delete()
  }

  updateCar(id : string, car : any) {
    this.afs.collection("cars").doc(id).update(car).then(() => console.log("updated")).catch((e) => alert(e))
  }

}
