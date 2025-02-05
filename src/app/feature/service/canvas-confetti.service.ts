import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  public triggerConfetti(x: number, y: number): void {
    confetti({
        particleCount: 100,
        spread: 150,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    });
  }
}