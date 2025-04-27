import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit(): void {
    const timeline = gsap.timeline();

    const letters = document.querySelectorAll('.letter');

    letters.forEach((letter, index) => {
      timeline.from(letter, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        y: index % 2 === 0 ? -50 : 50,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.05,
      });
    });

    timeline.fromTo(
      '.atiencia',
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' },
      '+=0.5',
    );
  }

  getAnimationClass(index: number): string {
    const animations = [
      'animate-fade-in-down',
      'animate-fade-in-left',
      'animate-fade-in-right',
      'animate-fade-in-up',
      'animate-fade-in-down',
    ];

    return animations[index % animations.length];
  }
}
