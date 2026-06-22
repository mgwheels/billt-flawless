import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCard } from './service-card';

describe('ServiceCard', () => {
  let component: ServiceCard;
  let fixture: ComponentFixture<ServiceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Test');
    fixture.componentRef.setInput('description', 'Test description');
    fixture.componentRef.setInput('iconPaths', ['M10 10h4v4h-4z']);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
