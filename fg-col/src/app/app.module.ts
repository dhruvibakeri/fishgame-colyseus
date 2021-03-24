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
import { CookieModule } from 'ngx-cookie';
import { PrivateGameRoomComponent } from './private-game-room/private-game-room.component';
import { CommonComponent } from './common/common.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    SvgBoardComponent,
    GameRoomComponent,
    PrivateGameRoomComponent,
    CommonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    CookieModule.forRoot(),
    FontAwesomeModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
