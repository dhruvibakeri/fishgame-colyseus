import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SvgBoardComponent } from './svg-board/svg-board.component';
import { FishComponent } from './fish/fish.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SvgBoardComponent,
    FishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
