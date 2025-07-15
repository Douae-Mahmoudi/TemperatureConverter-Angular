import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TemperatureConverter} from './temperature-converter/temperature-converter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemperatureConverter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Temperatur-Angular');
}
