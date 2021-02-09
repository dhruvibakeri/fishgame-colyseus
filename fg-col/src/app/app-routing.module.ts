import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameRoomComponent } from './game-room/gameRoom.component';

const routes: Routes = [{ path: 'rooms', component: GameRoomComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
