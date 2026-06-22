import { Component } from '@angular/core';
import { ServiceCard } from '../../components/service-card/service-card';

interface Service {
  title: string;
  description: string;
  icon: string[];
}

@Component({
  selector: 'app-services',
  imports: [ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly services: Service[] = [
    {
      title: 'Kitchen & Bath',
      description: 'Full remodels with premium materials and finishes that last.',
      icon: ['M12 3L3 7.5L12 12L21 7.5L12 3Z', 'M3 12.5L12 17L21 12.5', 'M3 17.5L12 22L21 17.5'],
    },
    {
      title: 'Flooring',
      description: 'Hardwood, tile, and luxury vinyl installation and refinishing.',
      icon: ['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M3 9h18', 'M9 3v18'],
    },
    {
      title: 'Structural',
      description: 'Wall removals, additions, and load-bearing modifications.',
      icon: ['M2 20L12 4L22 20', 'M6 16L12 10L18 16'],
    },
    {
      title: 'Exterior',
      description: 'Decks, siding, windows, and outdoor living spaces.',
      icon: ['M12 22c-4 0-8-3-8-7 0-4 4-9 8-13 4 4 8 9 8 13 0 4-4 7-8 7z', 'M10 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'],
    },
  ];
}
