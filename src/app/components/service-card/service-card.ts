import { Component, input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly iconPaths = input.required<string[]>();
}
