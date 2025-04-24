import { Component } from '@angular/core';

@Component({
  selector: 'app-typewriter-component',
  imports: [],
  templateUrl: './typewriter-component.component.html',
  styleUrl: './typewriter-component.component.css'
})
export class TypewriterComponentComponent {
  phrases = [
    'Ingeniero en Sistemas Computacionales',
    'Desarrollador backend',
    'Desarrollador frontend',
    'Desarrollador fullstack',
    
  ];
  displayText = '';
  private iPhrase = 0;
  private iChar = 0;
  private isDeleting = false;
  private speed = 120;          // ms

  ngOnInit() { this.tick(); }

  private tick() {
    const current = this.phrases[this.iPhrase];
    this.displayText = this.isDeleting
        ? current.substring(0, this.iChar--)
        : current.substring(0, this.iChar++);

    /* Cuando termina de escribir / borrar */
    if (!this.isDeleting && this.iChar === current.length + 1) {
      this.isDeleting = true;
      setTimeout(() => this.tick(), 1000);        // pausa al final
      return;
    }
    if (this.isDeleting && this.iChar === 0) {
      this.isDeleting = false;
      this.iPhrase = (this.iPhrase + 1) % this.phrases.length;
    }

    setTimeout(() => this.tick(), this.isDeleting ? this.speed / 2 : this.speed);
  }
}
