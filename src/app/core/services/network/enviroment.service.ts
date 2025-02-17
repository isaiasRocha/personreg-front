// src/app/core/services/environment.service.ts

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private apiUrl: string = environment.apiUrl;

  constructor() {}

  getUrl(endpoint: string): string {
    return `${this.apiUrl}/${endpoint}`;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }
}
