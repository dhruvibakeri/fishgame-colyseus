import { Client, Room } from "colyseus";

export class FishRoom extends Room {
  onCreate(options: any) {
    this.onMessage("keydown", (client, message) => {
      console.log("keydown message just came through")
    });
  }

  onJoin(client: Client, options: any) {
  }

  onLeave(client: Client, consented: boolean) {
  }

  onDispose() {
  }
}
