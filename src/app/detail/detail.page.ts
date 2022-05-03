import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User, UsersService } from '../shared/users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
  public user$ = this.route.paramMap.pipe(
    switchMap((params) => this.usersService.getUser(params.get('id')))
  );

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}
}
