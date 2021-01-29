import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SvgBoardComponent } from './svg-board/svg-board.component';
<<<<<<< HEAD
import { FishComponent } from './fish/fish.component';
=======
>>>>>>> e86fc8b0744477117ed59dcf7048cde0ae89692d

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SvgBoardComponent,
<<<<<<< HEAD
    FishComponent,
=======
>>>>>>> e86fc8b0744477117ed59dcf7048cde0ae89692d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
