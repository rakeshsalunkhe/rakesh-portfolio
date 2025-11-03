import { trigger, transition, style, animate } from '@angular/animations';

export const popupAnimation = trigger('popupAnim', [
  // 🟢 When popup opens
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.85)' }),
    animate(
      '350ms cubic-bezier(0.25, 0.8, 0.25, 1)',
      style({ opacity: 1, transform: 'scale(1)' })
    )
  ]),

  // 🔴 When popup closes
   transition(':leave', [
    style({ opacity: 1, transform: 'scale(1)' }),
    animate(
      '300ms ease-in-out',
      style({ opacity: 0, transform: 'scale(0.8)' })
    )
  ])
]);
