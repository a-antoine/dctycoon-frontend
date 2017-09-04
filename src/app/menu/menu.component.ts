import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlayerService} from '../_services/player.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  player: any;

  _subscription: any;

  constructor(private playerService: PlayerService) {
    this.player = playerService.player;

    this._subscription = playerService.playerChange.subscribe((value) => {
      this.player = value;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
