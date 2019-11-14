import { Component } from '@angular/core';
import * as tableData from './access';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  templateUrl: './access.component.html'
})
export class AccessComponent {
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(tableData.data); // create the source
  }
  settings = tableData.settings;
  settings2 = tableData.settings2;
}
