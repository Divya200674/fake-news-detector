import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-text-detection',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './text-detection.html',
  styleUrl: './text-detection.css'
})
export class TextDetection {}