import { Component, OnInit, SimpleChanges, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { appTags } from 'src/app/mock/app-tags';
import { facilityAttributesPickList } from 'src/app/mock/facility1-config';

import { PopupModelService } from './popup-model.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {

  constructor(public dialog: MatDialog, private popupModel: PopupModelService, private _snackBar: MatSnackBar) {
    console.log("this is constructor");
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
  }

  // FACILITY NAME
  facility_name = '';
  facilityName(facilityName: string): void {
    // console.log('facilityName: ', facilityName);
    this.facility_name = facilityName;
  }

  // ADDRESS
  addressData = [];
  openAddressModal(): void {
    this.popupModel.openAddressDialog().subscribe(data => {
      this.addressData = data;
      console.log('data: ', this.addressData);
    });
  }

  // IMAGE
  imageData = [];
  openImageModal(): void {
    this.popupModel.openImageDialog().subscribe(imageData => {
      console.log('image data: ', imageData.imageNameLists);
      this.imageData = imageData.imageNameLists;
    });
  }

  // SITE
  selected = '';
  siteId = '';
  siteChange(e) {
    console.log('siteSelect: ', e.value);
    this.siteId = e.value;
  }

  // ATTRIBUTES
  attributeList: Array<{ key: string, label: string, controlType: string, type: string }> = facilityAttributesPickList;
  selectedAtt = '';
  attributes = [];

  attChange(e) {
    let att = e.value;
    this.attributes.push(att);
  }

  attDelete(att) {
    console.log(att);
    this.removeFirst(this.attributes, att);
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
    this.tagsControl.setValue(tags);
    console.log('tagChange: ', this.tagsControl.value);
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  // UPDATE
  onUpdate() {

    if (this.facility_name === '' || this.facility_name === null || this.facility_name === undefined) {
      this._snackBar.open('Please fill in the "Facility Name" field!', 'OK', {
        duration: 3000,
      });
    } else if (this.siteId === '' || this.siteId === null || this.siteId === undefined) {
      this._snackBar.open('Please fill in the "Site" field!', 'OK', {
        duration: 3000,
      });
    } else {
      console.log('facility name: ', this.facility_name);
      console.log('adress: ', this.addressData);
      console.log('site id: ', this.siteId);
      console.log('attributes: ', this.attributes);
      console.log('tags: ', this.tagsControl.value);
      console.log('images: ', this.imageData);
    }

  }

}
