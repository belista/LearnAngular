import { Component } from '@angular/core';
import { StorageService } from '../app/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SSR';

  constructor(private storage: StorageService) {
    storage.setItem('foo', '123');
    console.log('storage', storage.getItem('foo'));
  }
}
