import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  playerInfo: any;

  constructor(private dashboardService: DashboardService) {
    this.playerInfo = {};
  }

  ngOnInit() {
    this.dashboardService.getPlayerInfo()
      .then((data) => {
        this.playerInfo = data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
