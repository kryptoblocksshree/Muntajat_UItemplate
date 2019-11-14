import { Component } from '@angular/core';
import * as tableData from './alerts';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(tableData.data); // create the source
  }
  settings = tableData.settings;
  settings2 = tableData.settings2;
}
