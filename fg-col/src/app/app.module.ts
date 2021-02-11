import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SvgBoardComponent } from './svg-board/svg-board.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { GameRoomComponent } from './game-room/gameRoom.component';
import { PrivateGameRoomComponent } from './private-game-room/private-game-room.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgBoardComponent,
    GameRoomComponent,
    PrivateGameRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
