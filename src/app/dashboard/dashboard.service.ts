import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {environment} from '../../environments/environment';
import {PlayerService} from '../_services/player.service';

import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {
  apiUrl: string;
  apiToken: string;

  constructor(private http: Http,
              private playerService: PlayerService) {
    this.apiUrl = environment.apiUrl;
    this.apiToken = playerService.player.token;
  }

  getPlayerInfo() {
    return new Promise<Array<any>>((resolve, reject) => {
      const headers = new Headers({'Content-Type': 'application/json'});
      headers.append('x-access-token', this.apiToken);
      const options = new RequestOptions({headers: headers});
      this.http.get(this.apiUrl + '/player/me', options)
        .map(res => res.json())
        .subscribe(
          data => resolve(data),
          err => reject(err)
        );
    });
  }
}
