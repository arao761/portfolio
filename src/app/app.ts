import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootingScreenComponent } from './components/booting-screen/booting-screen.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    BootingScreenComponent,
    HeroComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  showContent = signal(false);

  ngOnInit() {
    // Listen for boot complete event
    window.addEventListener('bootComplete', () => {
      this.showContent.set(true);
    });

    // Cursor glow follow effect
    const glow = document.getElementById('cursor-glow');
    if (glow) {
      window.addEventListener('pointermove', (e) => {
        glow!.style.left = `${e.clientX}px`;
        glow!.style.top = `${e.clientY}px`;
      });
    }
  }
}