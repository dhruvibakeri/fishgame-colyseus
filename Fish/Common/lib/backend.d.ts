import { Room } from "colyseus";
import { StateSchema } from "./src/schema";
export declare class FishRoom extends Room<StateSchema> {
    maxClients: number;
    onCreate(options: any): void;
    onJoin(client: any): void;
    onLeave(client: any): void;
    onDispose(): void;
    onAuth(client: any, options: any, req: any): boolean;
}
