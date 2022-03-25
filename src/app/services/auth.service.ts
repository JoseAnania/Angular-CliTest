import { Injectable } from '@angular/core';

// este decorador permite llamarlo desde cualquier lado y no tener que importarlo en app.module.ts
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { 
    console.log('Hola desde AuthService');
  }
}
