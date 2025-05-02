import { Injectable, computed, effect, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = signal<boolean>(false)
  readonly isDarkMode = computed(() => this.darkMode())

  constructor() {
    this.initTheme()
    this.setupEffect()
  }

  // Inicializa el tema verificando localStorage o preferencias del sistema
  private initTheme(): void {
    const savedTheme = localStorage.getItem('theme')
    let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme?.includes('light')) {
      prefersDark = false
    } else if (savedTheme?.includes('dark')) {
      prefersDark = true
    }
    this.darkMode.set(prefersDark)
  }

  // Aplica o quita la clase 'dark' al <html> cuando cambia darkMode
  private setupEffect(): void {
    effect(() => {
      const isDark = this.darkMode()
      document.documentElement.classList.toggle('dark', isDark)
    })
  }

  // Cambia el modo oscuro según el valor recibido
  setDarkMode(value: boolean): void {
    this.darkMode.set(value)
    this.saveTheme(value)
  }

  // Alterna entre modo claro y oscuro
  toggleTheme(): void {
    this.darkMode.update(v => {
      const newMode = !v
      this.saveTheme(newMode)
      return newMode
    })
  }

  // Guarda la preferencia del tema en localStorage
  private saveTheme(isDark: boolean): void {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }
}
