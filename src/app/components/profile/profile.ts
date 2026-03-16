import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

  user: any;
  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.user = data.results[0];
    });
  }

}
