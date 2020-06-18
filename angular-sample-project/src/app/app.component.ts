import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <!-- header -->
      <app-header></app-header>

      <div class="content-wrapper">

        <!-- Sidenav -->
        <app-sidenav></app-sidenav>

        <!-- Home page -->
        <app-home></app-home>

        <!-- routes will be rendered here -->
        <router-outlet></router-outlet>
      </div>

      <!-- footer -->
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample-project';
}
