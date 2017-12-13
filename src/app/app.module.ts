import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SessionTimerComponent } from './session-timer/session-timer.component';
import { BreakTimerComponent } from './break-timer/break-timer.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionTimerComponent,
    BreakTimerComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
