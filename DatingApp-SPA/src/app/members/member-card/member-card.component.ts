import { AlertifyService } from './../../_services/alertify.service';
import { UserService } from './../../_services/user.service';
import { AuthService } from './../../_services/auth.service';
import { User } from './../../_models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;

  constructor(private authService: AuthService, private userSerive: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  sendLike(recipientId: number) {
    this.userSerive.sendLike(this.authService.decodedToken.nameid, recipientId).subscribe(data => {
      this.alertify.success('You have likes: ' + this.user.knownAs);
    }, error => {
      this.alertify.error(error);
    });
  }

}
