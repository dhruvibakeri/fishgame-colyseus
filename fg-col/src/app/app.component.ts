import { Component } from '@angular/core';


type PageState = "home_page" | "humans_offline_page" | "landing_page" | "2_player";

const initPage = "2_player"  // "landing_page" // 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fg-col';
  page_state: PageState = initPage

  play_as_guest() {
    this.page_state = "home_page";
  }

  play_offline_with_humans() {
    this.page_state = "humans_offline_page";
  }

  play_2_player() {
    this.page_state = "2_player"
  }

}
