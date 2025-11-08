import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experiences } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  experiences = experiences;
  expandedItems = signal<Set<number>>(new Set());
  visibleItems = signal<Set<number>>(new Set());

  toggleExpand(index: number) {
    const current = this.expandedItems();
    if (current.has(index)) {
      current.delete(index);
    } else {
      current.add(index);
    }
    this.expandedItems.set(new Set(current));
  }

  isExpanded(index: number): boolean {
    return this.expandedItems().has(index);
  }

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-exp-index') || '0');
            const current = this.visibleItems();
            current.add(index);
            this.visibleItems.set(new Set(current));
          }
        });
      },
      { threshold: 0.2 }
    );

    setTimeout(() => {
      document.querySelectorAll('[data-exp-index]').forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  }
}
