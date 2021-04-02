import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { GameRoom } from '../game-room/gameRoom';
import { ActivatedRoute } from '@angular/router';
import { faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie';

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
  size = 50;
  faSearchPlus = faSearchPlus;
  faSearchMinus = faSearchMinus;
  yourName: string;
  colors = ['white', 'black', 'brown', 'red'];

  constructor(
    public db: AngularFireDatabase,
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {
    this.room = db.object('/rooms/' + this.roomidurl);
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
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
        Object.keys(this.roomRef.players).forEach((key) => {
          if (this.roomRef.players[key] === this.getCookie('uuid')) {
            this.yourName = key;
          }
        });
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

  getPenguinColor(color: string) {
    return 'fill : ' + color + ';';
  }

  getPlayerColor(index: number) {
    return 'fill :' + this.colors[index] + ';';
  }
}
