import { Component, OnInit, SimpleChanges, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { appTags } from 'src/app/data/app-tags';
import { facilityAttributesPickList } from 'src/app/data/facility1-config';

import { PopupModelService } from './popup-model.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {

  constructor(public dialog: MatDialog, private popupModel: PopupModelService) {
    console.log("this is constructor");
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
  }

  // FACILITY NAME
  facilityName(facilityName: string): void {
    console.log('facilityName: ', facilityName);
  }

  // ADDRESS
  addressData = [];
  addUpdateStatus = false;
  openAddressModal(): void {
    this.popupModel.openAddressDialog().subscribe(data => {
      this.addUpdateStatus = true;
      this.addressData = data;
      console.log('data: ', this.addressData['line1']);
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

}
