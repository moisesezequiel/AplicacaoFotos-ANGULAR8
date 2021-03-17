import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AluraPic';
  url = 'data:image/jpeg;base64,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'
}
