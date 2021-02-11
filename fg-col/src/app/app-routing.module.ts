import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameRoomComponent } from './game-room/gameRoom.component';
import { PrivateGameRoomComponent } from './private-game-room/private-game-room.component';

const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  { path: 'rooms', component: GameRoomComponent },
  { path: 'rooms/:id', component: PrivateGameRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
