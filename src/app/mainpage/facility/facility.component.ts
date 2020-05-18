import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { appTags } from 'src/app/data/app-tags';
import { facilityAttributesPickList } from 'src/app/data/facility1-config';

import { AddressComponent } from '../address/address.component';
import { ImagesComponent } from '../images/images.component';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    console.log("this is constructor");
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('changes: ', changes);
  }

  // FACILITY NAME
  facilityName(facilityName: string): void {
    console.log('facilityName: ', facilityName);
  }

  // ADDRESS
  openAddressModal(): void {
    const dialogRef = this.dialog.open(AddressComponent, {
      width: '320px', maxWidth: '320px', disableClose: true
    });
  }

  // IMAGE
  openImageModal(): void {
    const dialogRef = this.dialog.open(ImagesComponent, {
      width: '320px', maxWidth: '320px', height: '568px', disableClose: true
    });
  }

  // SITE
  selected = '';
  siteChange(e) {
    console.log('siteSelect: ', e.value);
  }

  // ATTRIBUTES
  attributeList: Array<{ key: string, label: string, controlType: string, type: string }> = facilityAttributesPickList;
  selectedAtt = '';
  attributes = [];

  attChange(e) {
    let att = e.value;
    this.attributes.push(att);
    console.log('attributes: ', this.attributes);
  }

  // TAGS
  tagsControl = new FormControl([]);
  tagList: string[] = appTags;

  tagChange(e) {
    console.log('tagChange: ', this.tagsControl.value);
  }

  onTagRemoved(tag: string) {
    const tags = this.tagsControl.value as string[];
    this.removeFirst(tags, tag);
    this.tagsControl.setValue(tags); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}
