import { Component } from '@angular/core';
import { GithubAPIService } from './github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score = null;
  username = null;
  userFound = null;
  constructor(private _gitHubAPIService: GithubAPIService) {}

  // Must add public_repos + followers
  getScore() {
    this._gitHubAPIService.retrieveAPIScore(this.username).then( (score) => {
      if ( score.id ) {
        this.userFound = true;
        this.score = score.public_repos + score.followers;
        console.log(this.score);
      }else {
        this.userFound = false;
        this.score = null;
        console.log('User not found.');
      }
      }).catch( err => {console.log(err); });
  }
}
