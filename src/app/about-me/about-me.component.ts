import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  imports: [CommonModule]
})
export class AboutMeComponent {
  bio: string = `I'm a passionate software developer with a love for Angular and clean code. 
  I enjoy learning new technologies and solving complex problems.`;

  strengths: string[] = [
    'Strong problem-solving skills',
    'Quick learner',
    'Team player',
    'Good communication'
  ];

  weaknesses: string[] = [
    'Tend to overcommit',
    'Perfectionism',
    'Can be overly detail-oriented'
  ];
}
