import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { countryList } from 'src/app/mock/app-country-list';

export interface DialogData {
  line1: string;
  line2: string;
  line3: string;
  state: string;
  zip: string;
  country: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  public breakpoint: number; // Breakpoint observer code
  public line1: string;
  public line2: string;
  public line3: string;
  public state: string;
  public zip: string;
  public country: string;
  public latitude: number;
  public longitude: number;

  constructor(
    public dialog: MatDialog,
    public addressdialogRef: MatDialogRef<AddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    // console.log('inject data: ',this.data);
  }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }

  // COUNTRY HANDLE
  // selectedCountry = 'United Kingdom of Great Britain and Northern Ireland (the)';
  countryList: string[] = countryList;

  countryChange(e) {
    console.log(e.value);
  }

  setAll(completed: boolean) {
    console.log('manual override: ', completed);
    if (completed == true) {
      this.data.line1 = '';
      this.data.line2 = '';
      this.data.line3 = '';
      this.data.state = '';
      this.data.zip = '';
      this.data.country = '';
      this.data.latitude = 0;
      this.data.longitude = 0;
    }
  }

  closeDialog(): void {
    // this.dialog.closeAll();
    this.addressdialogRef.close({ line1: this.line1, line2: this.line2, line3: this.line3, state: this.state, zip: this.zip, country: this.country, latitude: this.latitude, longitude: this.longitude });
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

}
