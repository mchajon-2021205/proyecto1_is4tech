import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1_is4trch';

  hola: string = '';
 
  constructor(
    private clipboardApi: ClipboardService
  ) { }
 
  copyText(value: string) {
    this.clipboardApi.copyFromContent(value)
  }
  
}
