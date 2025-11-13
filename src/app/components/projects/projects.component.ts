import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects = projects;
  visibleProjects = signal<Set<number>>(new Set());

  onCardHover(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0');
            const current = this.visibleProjects();
            current.add(index);
            this.visibleProjects.set(new Set(current));
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe after view init
    setTimeout(() => {
      document.querySelectorAll('[data-project-index]').forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  }
}
