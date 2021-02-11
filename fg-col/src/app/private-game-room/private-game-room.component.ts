import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { GameRoom } from '../game-room/gameRoom';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-private-game-room',
  templateUrl: './private-game-room.component.html',
  styleUrls: ['./private-game-room.component.css'],
})
export class PrivateGameRoomComponent {
  roomidurl: string;

  start_game = 'no';
  room: AngularFireObject<GameRoom>;
  roomRef: any;
  showRoom1 = false;
  roomidValue = '';
  roomRefPlayers: any[];

  constructor(public db: AngularFireDatabase, private route: ActivatedRoute) {
    this.room = db.object('/rooms/' + this.roomidurl);
  }

  ngOnInit() {
    this.roomidurl = this.route.snapshot.paramMap.get('id');
    this.db
      .object('/rooms/' + this.roomidurl)
      .valueChanges()
      .subscribe((roomRef) => {
        this.roomRef = roomRef;
        this.roomRefPlayers = this.roomRef.players;
      });
  }

  startGame() {
    this.start_game = 'yes';
  }
}
