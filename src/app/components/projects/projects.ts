import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  repos: any[] = [];
  githubService = inject(GithubService);

  ngOnInit(): void {
    this.githubService.getRepos().subscribe((data) => {
      this.repos = data
        .filter(repo => !repo.fork)
        .slice(0, 3);
    });
  }
}