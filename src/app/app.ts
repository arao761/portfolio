import { Component, OnInit, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { BootingScreenComponent } from './components/booting-screen/booting-screen.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ThemeToggleComponent,
    HeroComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    BootingScreenComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  showContent = signal(false); // Hide content until boot sequence completes
  private scrollY = 0;

  ngOnInit() {
    // Parallax scrolling effect
    this.updateParallax();

    // Listen for boot complete event
    window.addEventListener('bootComplete', () => {
      this.showContent.set(true);
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateParallax();
  }

  private updateParallax() {
    this.scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach((el) => {
      const speed = parseFloat((el as HTMLElement).dataset['parallax'] || '0');
      const yPos = -(this.scrollY * speed);
      (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  }
}