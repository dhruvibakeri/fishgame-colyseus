import { Component, OnInit, Input } from '@angular/core';
import { GameRoom } from './gameRoom';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie';
import { v4 as uuid } from 'uuid';

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
  roomidValue2 = '';
  join_room = 'no';

  constructor(
    public db: AngularFireDatabase,
    private cookieService: CookieService
  ) {
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
  }

  ngOnInit() {
    this.cookieService.put('uuid', uuid());
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  createRoom() {
    this.roomidValue2 = this.db.list(this.dbPath2).push({
      active: true,
      full: false,
      privacy: 'private',
      players: { [this.nameValue]: this.getCookie('uuid') },
      gameStarted: false,
      size: 40,
      gameState: {
        stage: 'placing',
        board: [
          [4, 3, 2, 1, 0],
          [3, 2, 2, -1, 2],
          [2, -1, 2, 4, 2],
          [2, 2, 4, 0, 2],
          [1, 2, -1, 2, 2],
        ],
        players: [],
      },
    }).key;

    this.join_room = 'yes';
  }

  joinGameRoom(): void {
    if (this.getRoom(this.roomidValue)) {
      if (Object.keys(this.getRoom(this.roomidValue).players).length === 3) {
        this.db.object('/rooms/' + this.roomidValue).update({ full: true });
      }
      if (Object.keys(this.getRoom(this.roomidValue).players).length < 4) {
        if (this.nameValue2 in this.getRoom(this.roomidValue).players) {
          this.nameValue2 =
            this.nameValue2 +
            '_' +
            Object.keys(this.getRoom(this.roomidValue).players).length;
        }
        this.db
          .object('/rooms/' + this.roomidValue + '/players')
          .update({ [this.nameValue2]: this.getCookie('uuid') });
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
