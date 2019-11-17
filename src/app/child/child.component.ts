import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { UPDATE_NAME, UPDATE_AGE } from '../store/action-type';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  name: string;
  age: number;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  update(property) {
    if (property === 'name') {
      this.ngRedux.dispatch({
        type: UPDATE_NAME,
        name: this.name
      });
    } else {
      this.ngRedux.dispatch({
        type: UPDATE_AGE,
        age: this.age
      });
    }
  }

}
