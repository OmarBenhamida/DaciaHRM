import { Component } from '@angular/core';
import { SessionService } from './shared/session.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dacia HRM';
  constructor(public service: SessionService, private router: Router, private spinner: NgxSpinnerService) { }

  // tslint:disable-next-line:use-lifecycle-interface
      ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  logout() {

    this.service.user = null;
    this.router.navigate(['/login/auth']);

  }

}
