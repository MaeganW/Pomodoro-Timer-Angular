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
  sessionTimer = this.sessionLength * 60000;
  breakTimer = this.breakLength * 60000;

  intervalId: any;
  timer: any = this.millisToMinutesAndSeconds(this.sessionTimer);

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
    this.intervalId = window.setInterval(() => {
      if (this.onSession) {
        this.sessionTimer -= 1;
        this.timer = this.millisToMinutesAndSeconds(this.sessionTimer);
        console.log('called', this.timer);
      }
      return false;
    }, 1000);
  }

  increment(variable) {
    (variable === 'breakLength') ? this.breakLength++ : this.sessionLength++;
  }

  decrement(variable) {
    (variable === 'breakLength') ? this.breakLength-- : this.sessionLength--;
  }

  millisToMinutesAndSeconds(millis: any) {
    const minutes = Math.floor(millis / 60000);
    const seconds: any = ((millis % 60000) / 1000).toFixed(0);
    // return (seconds === 60 ? (minutes + 1) + ':00' : minutes
    // + ':' + (seconds < 10 ? '0' : '') + seconds);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
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
    this.timer = this.sessionTimer;
    this.breakTimer = this.breakLength;
  }
}
