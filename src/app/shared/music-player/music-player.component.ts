import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { LucideAngularModule, Pause, Play, SkipBack, SkipForward } from 'lucide-angular'

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent implements OnInit {
  // Iconos lucide-angular
  readonly SkipBack = SkipBack
  readonly Play = Play
  readonly Pause = Pause
  readonly SkipForward = SkipForward

  tracks = [
    {
      id: 1,
      name: 'Happy Lofi',
      artist: 'Alex Producciones',
      src: 'music/happy-lofi-alex-productions.mp3',
    },
    {
      id: 2,
      name: 'Lofi 2',
      artist: 'Alex Producciones',
      src: 'music/happy-lofi-alex-productions.mp3',
    },
    {
      id: 3,
      name: 'Lofi 3',
      artist: 'Alex Producciones',
      src: 'music/happy-lofi-alex-productions.mp3',
    },
    {
      id: 4,
      name: 'Lofi 4',
      artist: 'Alex Producciones',
      src: 'music/happy-lofi-alex-productions.mp3',
    },
  ]

  currentTrackIndex = 0
  audio!: HTMLAudioElement
  progress = 0
  volume = 1
  hasInteracted = false
  isExpanded = false
  timeoutId!: ReturnType<typeof setTimeout>

  ngOnInit(): void {
    this.audio = new Audio(this.tracks[this.currentTrackIndex].src)
    this.audio.addEventListener('timeupdate', () => {
      this.progress = (this.audio.currentTime / this.audio.duration) * 100 || 0
    })
  }

  onMouseEnter() {
    clearTimeout(this.timeoutId)
    this.isExpanded = true
  }

  onMouseLeave() {
    this.timeoutId = setTimeout(() => {
      this.isExpanded = false
    }, 2000) // 5 segundos
  }
}
