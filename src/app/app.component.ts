import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hasAudio = true;
  isPaused = true;
  sessionLength = 25;
  breakLength = 5;

  onAudioClick() {
    this.hasAudio = !this.hasAudio;
  }

  onPlayClick() {
    this.isPaused = !this.isPaused;
  }

  onResetClick() {
    console.log('request for a reset');
  }
}
