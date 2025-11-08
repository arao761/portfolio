import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booting-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booting-screen.component.html',
  styleUrl: './booting-screen.component.css'
})
export class BootingScreenComponent implements OnInit {
  bootMessages = signal<string[]>([]);
  isVisible = signal(true);
  currentMessageIndex = 0;
  currentCharIndex = 0;
  isTyping = signal(false);

  private readonly messages = [
    'Initializing system...',
    'Loading portfolio data...',
    'Connecting to servers...',
    'Loading projects...',
    'Loading experience...',
    'System ready.',
    'Welcome.'
  ];

  ngOnInit() {
    this.startBootingSequence();
  }

  private startBootingSequence() {
    if (this.currentMessageIndex < this.messages.length) {
      this.typeMessage(this.messages[this.currentMessageIndex]);
    }
  }

  private typeMessage(message: string) {
    this.isTyping.set(true);
    
    if (this.currentCharIndex < message.length) {
      const newMessage = message.substring(0, this.currentCharIndex + 1);
      const messages = [...this.bootMessages()];
      messages[this.currentMessageIndex] = newMessage;
      this.bootMessages.set(messages);
      this.currentCharIndex++;
      
      setTimeout(() => this.typeMessage(message), 50);
    } else {
      this.currentCharIndex = 0;
      this.currentMessageIndex++;
      
      if (this.currentMessageIndex < this.messages.length) {
        setTimeout(() => {
          this.isTyping.set(false);
          setTimeout(() => this.startBootingSequence(), 300);
        }, 500);
      } else {
        // All messages typed, fade out
        setTimeout(() => {
          this.isTyping.set(false);
          setTimeout(() => {
            this.isVisible.set(false);
            // Emit event or callback to parent component
            setTimeout(() => {
              const event = new CustomEvent('bootComplete');
              window.dispatchEvent(event);
            }, 500);
          }, 1000);
        }, 500);
      }
    }
  }
}
