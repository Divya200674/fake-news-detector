import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink], // <--- Enables routerLink directive
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {}