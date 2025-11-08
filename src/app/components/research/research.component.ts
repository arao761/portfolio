import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experiences } from '../../data/portfolio.data';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent {
  researchExperience = experiences.find(exp => exp.company.includes('Johns Hopkins')) || experiences[0];
}
