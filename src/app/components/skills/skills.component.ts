import { Component } from '@angular/core';
import { skills } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = skills;
}
