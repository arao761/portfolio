import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  personalInfo = personalInfo;
}
