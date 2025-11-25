import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Products } from './components/products/products';
import { About } from './components/about/about';
import { Reviews } from './components/reviews/reviews';

@Component({
  selector: 'app-root',
  imports: [Hero, Products, About, Reviews],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'beer-disk';
  protected isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
