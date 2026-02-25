import { Routes } from '@angular/router';

import { Header } from './components/header/header';
import { List } from './components/list/list';
import { Table } from './components/table/table';
import { Buttons } from './components/buttons/buttons';

import { Diplomas } from './components/diplomas/diplomas';
import { Studies } from './components/studies/studies';

export const routes: Routes = [
  { path: 'header', component: Header },

  {
    path: 'table',
    component: Table,
    children: [
      { path: 'diplomas', component: Diplomas },
      { path: 'studies', component: Studies }
    ]
  },

  {
    path: 'list',
    component: List,
    children: [
      { path: 'buttons', component: Buttons },
      { path: 'table', component: Table }
    ]
  },

  { path: '', redirectTo: 'header', pathMatch: 'full' }
];