import { Routes } from '@angular/router';

import { FileserverComponent } from './fileserver/fileserver.component';
import { ActivedirectoryComponent } from './activedirectory/activedirectory.component';
import { AlertsComponent } from './alerts/alerts.component';
import {AccessComponent} from './access/access.component';
import{FirewallsComponent} from './firewalls/firewalls.component';
import {EmailComponent} from './emailgateway/emailgateway.component'


import { from } from 'rxjs';
export const DatasourcesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fileserver',
        component: FileserverComponent,
        data: {
          title: 'File server',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'File server' }
          ]
        }
      },
      {
        path: 'activedirectory',
        component: ActivedirectoryComponent ,
        data: {
          title: 'Active Directory',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Active Directory' }
          ]
        }
      },

      {
        path: 'access',
        component: AccessComponent ,
        data: {
          title: 'Access control',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Access control' }
          ]
        }
      },
      {
        path: 'alerts',
        component: AlertsComponent,
        data: {
          title: 'Alerts',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Alerts' }
          ]
        }
      },
      {
        path: 'firewalls',
        component: FirewallsComponent,
        data: {
          title: 'Firewalls',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Firewalls' }
          ]
        }
      },
      {
        path: 'emailgateway',
        component: EmailComponent,
        data: {
          title: 'Email Gateway',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Email Gateway' }
          ]
        }
      }
      
    ]
  }
];
