import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Navbar } from "./navbar/navbar";
import { Card } from "./card/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ajay');
}
