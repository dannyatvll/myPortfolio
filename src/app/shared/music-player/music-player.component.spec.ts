import type { ComponentFixture } from '@angular/core/testing'
import { TestBed } from '@angular/core/testing'

import { MusicPlayerComponent } from './music-player.component'

describe('musicPlayerComponent', () => {
  let component: MusicPlayerComponent
  let fixture: ComponentFixture<MusicPlayerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPlayerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MusicPlayerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
