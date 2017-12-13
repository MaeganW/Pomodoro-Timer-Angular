import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hasAudio = true;

  onClick() {
    console.log('clicked');
    this.hasAudio = !this.hasAudio;
  }
}
