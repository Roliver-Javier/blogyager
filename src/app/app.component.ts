import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {
  title = 'ng-blog';

  constructor(iconRegistry : MatIconRegistry, sanitizer : DomSanitizer){
    iconRegistry.addSvgIcon(
      'ico-bag',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon/yarn-ball.svg')
    )
    .addSvgIcon(
      'ico-point',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon/point.svg')
    )
    .addSvgIcon(
      'ico-tweet',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon/twitter.svg')
    )
    .addSvgIcon(
      'ico-github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon/github.svg')
    )
  }
}
