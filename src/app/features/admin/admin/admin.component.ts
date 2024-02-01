import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AdminActions } from './store/admin.actions';
import { State } from './store/admin.reducer';
import { selectListRoles } from './store/admin.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  private store = inject(Store<State>);
  listRoles$ = this.store.pipe(select(selectListRoles));

  loadListRoles(): void {
    this.store.dispatch(AdminActions.loadAdmins());
  }
}
