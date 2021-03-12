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
  canStartGame = false;
  size = 40;

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
        if (Object.keys(this.roomRef.players).length >= 2) {
          this.canStartGame = true;
        }
      });
  }

  startGame() {
    this.start_game = 'yes';
    this.db.object('/rooms/' + this.roomidurl).update({ gameStarted: true });
    this.db
      .object('/rooms/' + this.roomidurl + '/gameState')
      .update({ players: this.getPlayers() });
  }

  sizeUp() {
    this.size = this.size + 1;
  }

  sizeDown() {
    this.size = this.size - 1;
  }

  getPlayers() {
    let res = [];
    let colors = ['red', 'brown', 'black', 'white'];
    for (let name of Object.keys(this.roomRefPlayers)) {
      res.push({
        color: colors.pop(),
        score: 0,
        places: [],
        status: 'online',
        name: name,
        depth: 2,
      });
    }
    return res;
  }
}
