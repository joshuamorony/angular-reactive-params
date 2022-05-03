import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  users$ = this.usersService.getUsers();

  constructor(private usersService: UsersService) {}
}
