import { PlayerData } from './player-data';
export class Hit {
  player: string;
  team: string;
  pos: string;
  year: number
};
export class HitPlayer extends PlayerData {
  items: Hit [];

}
