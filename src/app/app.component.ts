import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { TempComponent } from './tem/temp/temp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddMessageComponent } from "./tem/add-message/add-message.component";
import { ListMessageComponent } from "./tem/list-message/list-message.component";
=======
import { TempComponent } from "./tem/temp/temp.component";
import { NavbarComponent } from "./navbar/navbar.component";
>>>>>>> ad582129bff2e2367557dac0232c1aef27417761

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, TempComponent, NavbarComponent, AddMessageComponent, ListMessageComponent],
=======
  imports: [RouterOutlet, TempComponent, NavbarComponent],
>>>>>>> ad582129bff2e2367557dac0232c1aef27417761
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApi';
}
<<<<<<< HEAD

=======
>>>>>>> ad582129bff2e2367557dac0232c1aef27417761
