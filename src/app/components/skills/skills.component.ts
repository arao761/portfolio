import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skills } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills = skills;
  visibleSkills = signal<Set<number>>(new Set());

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
            const index = parseInt(entry.target.getAttribute('data-skill-index') || '0');
            const current = this.visibleSkills();
            current.add(index);
            this.visibleSkills.set(new Set(current));
          }
        });
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      document.querySelectorAll('[data-skill-index]').forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  }
}
