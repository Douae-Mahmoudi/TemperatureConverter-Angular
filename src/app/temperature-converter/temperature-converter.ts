import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.html',
  styleUrls: ['./temperature-converter.css']
})
export class TemperatureConverter {
  celsius: number | null = null;
  fahrenheit: number | null = null;

  onCelsiusChange(event: Event): void {
    //Event c’est l’événement déclenché par l’utilisateur qui tape dans l’input
    //  // On dit que c'est un input HTML pour accéder à sa valeur
    const inputElement = event.target as HTMLInputElement;
    //inputElement.value c est la valeur taper par user
    //.value de html qui est dans  input
    const value = parseFloat(inputElement.value);

    if (!isNaN(value)) {
      this.celsius = value;
      this.fahrenheit = (value * 9/5) + 32;
    } else {
      this.celsius = null;
      this.fahrenheit = null;
    }
  }

  onFahrenheitChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = parseFloat(inputElement.value);

    if (!isNaN(value)) {
      this.fahrenheit = value;
      this.celsius = (value - 32) * 5/9;
    } else {
      this.fahrenheit = null;
      this.celsius = null;
    }
  }
}
