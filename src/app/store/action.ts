import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import {
	UPDATE_NAME,
	UPDATE_AGE,
} from './action-type';

@Injectable({
	providedIn: 'root'
})
export class AppActions {
	@select('doctorProfile') doctorProfile$: Observable<any>;

	constructor(
		private ngRedux: NgRedux<IAppState>,
	) { }

	storeToRedux(property) {
		switch (property) {
			case UPDATE_NAME:

				break;
			case UPDATE_AGE:

				break;

			default: break;
		}
	}
}
