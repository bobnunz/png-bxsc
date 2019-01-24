import { PlayerData } from './player-data';
export class Hit {
  player: string;
  team: string;
  pos: string;
  year: number;

  constructor (){
    this.player = '';
    this.team = '';
    this.pos = '';
    this.year = 0;

}
};
export class HitPlayer extends PlayerData {
  items: Hit [];

}
