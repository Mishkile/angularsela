import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore"


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs : AngularFirestore) { }

  getAll() {
   return this.afs.collection("users").snapshotChanges() // will return the users
  }

  getOne(id : string) {
   return this.afs.collection("users").doc(id).valueChanges() // will return the user
  }

  addOne(user : any) {
    return this.afs.collection("users").add(user)
  }

  deleteOne(id : string) {
    return this.afs.collection("users").doc(id).delete()
  }

  updateOne(id : string, obj : any) {
    return this.afs.collection("users").doc(id).update(obj)
  }

}
