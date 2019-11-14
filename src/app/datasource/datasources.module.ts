import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { DatasourcesRoutes } from './datasources.routing';
import { FileserverComponent } from './fileserver/fileserver.component';
import { ActivedirectoryComponent } from './activedirectory/activedirectory.component';
import { AlertsComponent } from './alerts/alerts.component';
import {AccessComponent} from './access/access.component'
import{FirewallsComponent} from './firewalls/firewalls.component'
import {EmailComponent} from './emailgateway/emailgateway.component'


import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DatasourcesRoutes),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  declarations: [FileserverComponent, ActivedirectoryComponent, AlertsComponent,AccessComponent,FirewallsComponent,EmailComponent]
})
export class DatasourcesModule {}
