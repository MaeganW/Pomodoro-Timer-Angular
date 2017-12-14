import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hasAudio = true;
  isPaused = true;
  onSession = true;
  sessionLength = 25;
  breakLength = 5;
  sessionTimer = this.sessionLength;
  breakTimer = this.breakLength;

  intervalId: number;
  timer: number;

  onAudioClick() {
    this.hasAudio = !this.hasAudio;
  }

  onPlayClick() {
    this.isPaused = !this.isPaused;
    if (!this.isPaused) {
      this.playTimer();
    } else {
      this.pauseTimer();
    }
  }

  pauseTimer() {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
    }
  }

  playTimer() {
    this.intervalId = window.setInterval(this.countdown(), 200);
  }

  countdown() {
    if (this.onSession) {
      this.timer = this.sessionTimer--;
    }
    return false;
  }

  onResetClick() {
    console.log('request for a reset');
    this.sessionTimer = this.sessionLength;
    this.breakTimer = this.breakLength;
  }
}
