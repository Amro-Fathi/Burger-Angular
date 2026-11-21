import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookComponent } from './components/book/book.component';

@Component({
  imports: [HeaderComponent, NavbarComponent ,AboutComponent ,MenuComponent , BookComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('burger');
}
