import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../../../assets/users.mock';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  user?: UserData;

  constructor() {
    this.initUserData();
  }

  initUserData() {
    const user = this.route.snapshot.data['user'] || history.state.user;

    user ? this.user = user : this.router.navigate(['/user-info']);
  }
}
