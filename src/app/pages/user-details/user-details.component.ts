import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserData } from '../../../assets/users.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  private router = inject(Router);

  user = this.router.getCurrentNavigation()?.extras.state?.['user'];
}
