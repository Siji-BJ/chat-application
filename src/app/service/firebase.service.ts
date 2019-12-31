import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }
  sendMessage(value) {
    return this.db.collection('users').add({
      name: 'user1',
      message: value.message,
    });
  }
  getMessages() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/users').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }
}
