import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CommonModule } from '@angular/common'
import type { AfterViewInit } from '@angular/core'
import { Component } from '@angular/core'
import { gsap } from 'gsap'

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.showNameAndRole()
    this.movePresentationBlock()
  }

  showNameAndRole(): void {
    const timeline = gsap.timeline()
    const name = document.querySelectorAll('.name')
    const role = document.querySelector('.role')
    const slogan = document.querySelector('.slogan')

    timeline.from(name, {
      opacity: 0,
      x: (i: number) => (i % 2 === 0 ? -50 : 50),
      y: (i: number) => (i % 2 === 0 ? -100 : 100),
      duration: 1.5,
      ease: 'power2.out',
      stagger: 41
    })

    timeline.fromTo(
      role,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power2.out' },
      '+=0.2'
    )

    timeline.fromTo(
      slogan,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' },
      '+=0.1'
    )
  }

  movePresentationBlock(): void {
    gsap.registerPlugin(ScrollTrigger)
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        scrub: true,
        pin: true
      }
    })

    timeline.to('.hero-content', {
      scale: 1.2,
      opacity: 0,
      ease: 'power2.out'
    })
  }
}
