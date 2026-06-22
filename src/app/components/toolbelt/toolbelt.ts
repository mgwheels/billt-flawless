import { Component, output } from '@angular/core';

@Component({
  selector: 'app-toolbelt',
  templateUrl: './toolbelt.html',
  styleUrl: './toolbelt.scss',
})
export class Toolbelt {
  readonly navigate = output<string>();
}
