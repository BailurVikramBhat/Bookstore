import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  homePage = 'Home';
  brandName = 'Bookstore';
  searchCTA = 'Search';
  searchbarPlaceholder = 'Look into anything!';
  routerArray = ['Home', 'All books', 'Categories', 'About', 'Contact'];
}
