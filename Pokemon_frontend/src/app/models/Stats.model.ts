import { Stat } from "./Stat.model";

export class Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
  get color(): string {
    if (this.base_stat > 50) {
      console.log('groen');
      return '#FF0000';
    } else {
      console.log('rood');
      return '#00FF00';
    }
  }
}
