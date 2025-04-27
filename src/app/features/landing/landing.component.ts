import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  backgroundGradient = 'bg-gradient-to-tr from-cielo via-rio to-pino';
  backgroundGradientNight = 'bg-gradient-to-tr from-lava via-noche to-bosque';
  isDarkMode = false;

  ngOnInit(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = prefersDark;
  }

  get currentBackground() {
    return this.isDarkMode ? this.backgroundGradientNight : this.backgroundGradient;
  }
}
