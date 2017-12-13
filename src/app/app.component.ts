import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hasAudio = true;
  isPaused = true;

  onAudioClick() {
    this.hasAudio = !this.hasAudio;
  }

  onPlayClick() {
    this.isPaused = !this.isPaused;
  }
}
