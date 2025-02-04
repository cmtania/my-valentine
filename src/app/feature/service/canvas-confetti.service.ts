import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  public triggerConfetti(): void {
    confetti({
        particleCount: 100,
        spread: 150,
        origin: { y: 0.6 },
    });
  }
}