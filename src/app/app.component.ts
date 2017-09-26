import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showButton = true;

  friends = ['Bob', ' Willy', ' Cheeseburgers', ' Teriyaki'];
  newFriend: string;

  addFriend() {
    if (!this.newFriend) return;
    this.friends.push(this.newFriend);
    this.newFriend = '';
  }

  removeFriends() {
    this.friends = [];
  }
}
