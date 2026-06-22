import { Component } from '@angular/core';
import { Hero } from './pages/hero/hero';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Toolbelt } from './components/toolbelt/toolbelt';

@Component({
  selector: 'app-root',
  imports: [Hero, Services, About, Contact, Toolbelt],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
