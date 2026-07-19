import { Component } from '@angular/core';
import { personalInfo } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="education" class="mt-24 reveal">
      <h2 class="label-mono mb-10">Education</h2>

      <article class="grid sm:grid-cols-[9.5rem_1fr] gap-x-8 gap-y-2">
        <p class="font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary pt-1 whitespace-nowrap">
          {{ personalInfo.education.graduation }}
        </p>

        <div>
          <h3 class="font-serif text-xl font-medium mb-1">{{ personalInfo.education.school }}</h3>
          <p class="text-[0.95rem] text-ink-secondary dark:text-ink-dark-secondary">
            {{ personalInfo.education.degree }} · GPA {{ personalInfo.education.gpa }}
          </p>

          <ul class="mt-3 space-y-2.5">
            @for (honor of personalInfo.education.honors; track honor) {
              <li class="text-[0.95rem] leading-relaxed text-ink-secondary dark:text-ink-dark-secondary pl-4 relative">
                <span class="absolute left-0 top-[0.72em] h-px w-2 bg-ink-tertiary dark:bg-ink-dark-tertiary"></span>
                {{ honor }}
              </li>
            }
            <li class="text-[0.95rem] leading-relaxed text-ink-secondary dark:text-ink-dark-secondary pl-4 relative">
              <span class="absolute left-0 top-[0.72em] h-px w-2 bg-ink-tertiary dark:bg-ink-dark-tertiary"></span>
              {{ personalInfo.leadership.title }} - {{ personalInfo.leadership.description }}
            </li>
          </ul>

          <p class="mt-4 font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary leading-relaxed">
            {{ personalInfo.education.coursework.join(' · ') }}
          </p>
        </div>
      </article>
    </section>
  `
})
export class EducationComponent {
  personalInfo = personalInfo;
}
