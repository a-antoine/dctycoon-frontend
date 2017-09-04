import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PlayerService {
  player: any;
  playerChange: Subject<any> = new Subject<any>();

  constructor() {
    this.player = JSON.parse(localStorage.getItem('currentPlayer'));
  }

  change() {
    this.player = JSON.parse(localStorage.getItem('currentPlayer'));
    this.playerChange.next(this.player);
  }
}
