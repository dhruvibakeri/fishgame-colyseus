export type GameRoom = {
  active: boolean;
  full: boolean;
  players: any[];
  privacy: 'public' | 'private';
};
