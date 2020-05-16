import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { countryList } from 'src/app/data/app-country-list';

import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  public breakpoint: number; // Breakpoint observer code
  public line1: string = `Edocuments Ltd`;
  public line2: string = `32 Waterhouse Business Centre`;
  public line3: string = `Chelmsford`;
  public state: string = `Essex`;
  public zip: string = `CM3 4EG`;
  public country: string = `United Kingdom (drop down)`;
  public latitude: string = ``;
  public longitude: string = ``;
  public addCusForm: FormGroup;
  wasFormChanged = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.addCusForm = this.fb.group({
      IdProof: null,
      // Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')
      line_1: [this.line1, [Validators.required]],
      line_2: [this.line2, [Validators.required]],
      line_3: [this.line3, [Validators.required]],
      state: [this.state, [Validators.required]],
      zip: [this.zip, [Validators.required]],
      country: [this.country, [Validators.required]],
      latitude: [this.latitude, [Validators.required]],
      longitude: [this.longitude, [Validators.required]],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }

  public onAddCus(): void {
    this.markAsDirty(this.addCusForm);
  }

  // COUNTRY HANDLE
  selectedCountry = 'United Kingdom of Great Britain and Northern Ireland (the)';
  countryList: string[] = countryList;

  countryChange(e) {
    console.log(e.value);
  }

  openDialog(): void {
    console.log(this.wasFormChanged);
    // if(this.addCusForm.dirty) {
    //   const dialogRef = this.dialog.open(DeleteComponent, {
    //     width: '340px',
    //   });
    // } else {
    this.dialog.closeAll();
    // }
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

}
