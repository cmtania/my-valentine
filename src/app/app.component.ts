import { Component, HostListener } from '@angular/core';
import { ConfettiService } from './feature/service/canvas-confetti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-valentine';
  constructor(private confettiService: ConfettiService) { }

  hideButton = true;
  isYesClicked = false;

  yesClick() {
    this.isYesClicked = true;
    this.hideButton = false;
  }

  moveNoButton() {
    const noButton = document.querySelector('.no-button') as HTMLElement;
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    console.log('Document clicked!', event);
    if(this.isYesClicked) {
      const x = event.clientX;
      const y = event.clientY;
      this.confettiService.triggerConfetti(x, y);
    }

  }

}
