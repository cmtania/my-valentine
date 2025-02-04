import { Component } from '@angular/core';
import { ConfettiService } from './feature/service/canvas-confetti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-valentine';
  constructor(private confettiService: ConfettiService) { }

  flowerVisible = false;
  showNoButton = true;

  showFlower() {
    this.flowerVisible = true;
    this.showNoButton = false;

    for (let i = 0; i < 5; i++) {
      this.confettiService.triggerConfetti();
    }
    
  }

  askAgain() {
    alert("Are you sure? Think again!");
  }

  moveNoButton() {
    const noButton = document.querySelector('.no-button') as HTMLElement;
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  }
}
