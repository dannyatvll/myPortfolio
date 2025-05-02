import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LucideAngularModule, Moon, Sun } from 'lucide-angular'
import { MusicPlayerComponent } from '../music-player/music-player.component'
import { ThemeService } from '../../core/services/theme.service'

@Component({
  selector: 'app-header',
  imports: [MusicPlayerComponent, CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}
  readonly nightMode = Moon
  readonly lightMode = Sun
  readonly title = 'porfolio-legend'

  toggleDarkMode() {
    this.themeService.toggleTheme()
  }

  get iconType() {
    return this.themeService.isDarkMode() ? this.lightMode : this.nightMode
  }
}
