import { Component } from '@angular/core';
import { personalInfo } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  personalInfo = personalInfo;
  currentYear = new Date().getFullYear();
}
