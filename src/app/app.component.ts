import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatApp';
  chatForm: FormGroup;
  messages: Array<any>;
  constructor(public firebaseService: FirebaseService) {}
  ngOnInit() {
    this.chatForm = new FormGroup({
      message : new FormControl()
    });
    this.getData();
  }
  onSubmit(value) {
    this.firebaseService.sendMessage(value)
    .then(
      res => {
        this.chatForm.reset();
        this.getData();
      }
    );
  }
getData() {
    this.firebaseService.getMessages().then(result => {
      this.messages = result;
    });
  }
}
