import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  // inyectamos el Servicio
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
