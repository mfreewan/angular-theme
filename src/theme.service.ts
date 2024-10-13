import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { isDark } from './theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);

  constructor() {
    if (isDark) {
      this.document.body.classList.add('dark-theme');
    } else {
      this.document.body.classList.remove('dark-theme');
    }
  }
}
