import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cities = ['Managua', 'Masaya', 'Leon', 'Granada', 'Chinandega', 'Esteli'];
  name!: string;
  title = 'Dia 11 del reto';
  url =
    'https://th.bing.com/th/id/R.34f4c604cd9bfd44d39ece8f6a01363f?rik=7OIxdjJ6xOdnZA&pid=ImgRaw&r=0';
  selection!: string;
  criteria = '';

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityClicked(city: string): void {
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }
}
