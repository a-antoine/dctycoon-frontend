import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import {PlayerService} from '../_services/player.service';

@Injectable()
export class LoginService {

  apiUrl: string;

  constructor(private http: Http,
              private playerService: PlayerService) {
    this.apiUrl = environment.apiUrl;
  }

  login(username: string, password: string) {
    return new Promise<Array<any>>((resolve, reject) => {
      const body = JSON.stringify({username: username, password: password});
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({headers: headers});
      this.http.post(this.apiUrl + '/player/login', body, options)
        .map(res => res.json())
        .subscribe(
          data => {
            if (data.token) {
              localStorage.setItem('currentPlayer', JSON.stringify(data));
              this.playerService.change();
            } else {
              reject(data.msg);
            }
            resolve(data);
          },
          err => reject(err)
        );
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentPlayer');
    this.playerService.change();
  }
}
