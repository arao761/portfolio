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
  showBootScreen = signal(true); // Control boot screen visibility
  private scrollY = 0;

  ngOnInit() {
    // Check if user has already seen boot animation in this session
    const hasSeenBootAnimation = sessionStorage.getItem('hasSeenBootAnimation');

    if (hasSeenBootAnimation) {
      // Skip boot animation, show content immediately
      this.showBootScreen.set(false);
      this.showContent.set(true);
    } else {
      // Show boot animation and listen for completion
      window.addEventListener('bootComplete', () => {
        this.showContent.set(true);
        // Mark boot animation as seen for this session
        sessionStorage.setItem('hasSeenBootAnimation', 'true');
      });
    }

    // Parallax scrolling effect
    this.updateParallax();
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