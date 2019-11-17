import { Component, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'angular-redux';
  @select('name') name$: Observable<any>;
  name: string = '';
  @select('age') age$: Observable<any>;
  age: number = null;
  NameSubscription: Subscription;
  AgeSubscription: Subscription;
  constructor() {
    this.NameSubscription = this.name$.subscribe(state => {
      this.name = state;
    });
    this.AgeSubscription = this.age$.subscribe(state => {
      this.age = state;
    });
  }

  ngOnDestroy() {
    if (this.NameSubscription) {
      this.NameSubscription.unsubscribe();
    }
    if (this.AgeSubscription) {
      this.AgeSubscription.unsubscribe();
    }
  }
}
