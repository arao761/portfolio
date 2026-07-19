import { Component } from '@angular/core';
import { projects } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = projects;
}
