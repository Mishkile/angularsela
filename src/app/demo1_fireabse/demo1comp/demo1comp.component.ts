import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-demo1comp',
  templateUrl: './demo1comp.component.html',
  styleUrls: ['./demo1comp.component.css']
})
export class Demo1compComponent {


  constructor(private fbs : FirebaseService) {}


  users : any[] = []
  user : any = {}


  id : string = ''



  async updateOne() {
   await this.fbs.updateOne("eIrrqCHKWt4x7TqbngXm", {name: "Gil", age: 100})
   console.log("Updated")
  }

async deleteOne(id : string) {
  await this.fbs.deleteOne(id)


}

 async addOne() {
    const obj = {name: "Yossi", age: 50}
   const resp = await this.fbs.addOne(obj)
   console.log(resp)
  }


  getOne() {
    this.fbs.getOne(this.id).subscribe(data => console.log(data))
  }

  getAllUsers() {
    this.fbs.getAll().subscribe(data => {
       this.users = data.map(user => {
        return {id: user.payload.doc.id, ...user.payload.doc.data() as {}  }
       })
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllUsers()
  }


}
