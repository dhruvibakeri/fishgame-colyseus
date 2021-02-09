import { Component, OnInit, Input } from '@angular/core';
import { GameRoom } from './gameRoom';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gameRoom',
  templateUrl: './gameRoom.component.html',
  styleUrls: ['./gameRoom.component.css'],
})
export class GameRoomComponent {
  rooms: AngularFireList<GameRoom[]>;
  roomsRef: any;

  private dbPath2 = '/rooms';

  nameValue = '';
  nameValue2 = '';
  roomidValue = '';

  constructor(public db: AngularFireDatabase) {
    this.rooms = db.list(this.dbPath2);
    this.rooms
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((roomsRef) => {
        this.roomsRef = roomsRef;
      });
    //this.items = db.list('items').valueChanges()
  }

  createRoom() {
    this.db.list(this.dbPath2).push({
      active: true,
      full: false,
      privacy: 'public',
      players: { [this.nameValue]: true },
    });
  }

  joinGameRoom(): void {
    if (this.getRoom(this.roomidValue)) {
      if (Object.keys(this.getRoom(this.roomidValue).players).length === 3) {
        this.db.object('/rooms/' + this.roomidValue).update({ full: true });
      }
      if (Object.keys(this.getRoom(this.roomidValue).players).length < 4) {
        this.db
          .object('/rooms/' + this.roomidValue + '/players')
          .update({ [this.nameValue2]: true });
      }
    }
  }

  getRoom(key: string): any {
    let res;
    this.roomsRef.forEach((element) => {
      if (element.key === key) {
        res = element;
      }
    });
    return res;
  }
}
