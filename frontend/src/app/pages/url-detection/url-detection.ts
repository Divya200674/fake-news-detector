import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-url-detection',
  standalone: true,
  imports: [RouterLink], // <--- Essential for routerLink to work in HTML
  templateUrl: './url-detection.html',
  styleUrl: './url-detection.css'
})
export class UrlDetection {}