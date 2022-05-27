import { Component, OnInit } from '@angular/core';
import { defaultComment } from './app.constants';
import { Comments, RegisteringStatus } from './app.interface';
import { getTestemunhos, register } from './app.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '7Belo';
  comments: Comments = [
    defaultComment,
    defaultComment,
    defaultComment,
    defaultComment,
  ];
  name = '';
  email = '';
  registering = false;
  registeringStatus: RegisteringStatus = 'NOT_TRIED';
  async ngOnInit() {
    const testemunhos = await getTestemunhos();
    if (testemunhos.length) this.comments = testemunhos;
  }
  async register() {
    this.registering = true;

    const status = await register(this.name, this.email);

    this.registering = false;

    if (status === 201) this.registeringStatus = 'SUCCEEDED';
    else this.registeringStatus = 'FAILED';
  }
}
