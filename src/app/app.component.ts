import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicPlayerComponent } from './shared/music-player/music-player.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MusicPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio-legend';
}
