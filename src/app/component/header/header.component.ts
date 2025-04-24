import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }
}