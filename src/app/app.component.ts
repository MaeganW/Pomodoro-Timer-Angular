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

  intervalId: any;
  timer = 25;

  onAudioClick() {
    this.hasAudio = !this.hasAudio;
    console.log(this.timer);
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
    this.intervalId = window.setInterval(function() {
      // if (this.onSession) {
        console.log(this.timer);
        this.timer -= 1;
        console.log('called', this.timer);
      // }
      // return false;
    }, 1000);
  }

  // timer() {
  //   if (this.onSession) {
  //     this.timer--;
  //     console.log('called', this.timer);
  //   }
  //   return false;
  // }

  onResetClick() {
    console.log('request for a reset');
    this.sessionTimer = this.sessionLength;
    this.breakTimer = this.breakLength;
  }
}
