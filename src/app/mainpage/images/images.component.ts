import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  imageNameLists: string[];
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public imagedialogRef: MatDialogRef<ImagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

  urls = [];
  imageLists = [];
  imageNames = [];
  imageNameLists = [];

  onSelectFile(event) {

    this.imageNames.push(event.target.files[0].name);
    this.imageNameLists = [];
    this.imageNameLists = this.imageNames.reduce((accu, cur, index) => {
      accu[index + ''] = cur;
      return accu;
    }, {});

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.urls.push(event.target.result);

          this.imageLists = [];
          this.imageLists = this.urls.reduce((accu, cur, index) => {
            accu[index + ''] = cur;
            return accu;
          }, {});
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  key = 0;
  imglength = 0;
  newImgLength = 0;
  newImageLists = [];
  newImageNames = [];
  newImageNamesList = [];

  onImageRemove(image: string) {

    this.key = parseInt(image['key'], 10);
    this.removeFirst(this.urls, image['value']);
    this.removeFirst(this.imageNames, image['value']);

    this.imglength = Object.keys(this.imageLists).length;
    this.newImageLists = [];
    this.newImageNames = [];

    for (let j = 0; j < this.imglength; j++) {
      if (j != this.key) {
        this.newImageLists.push(this.imageLists[j]);
        this.newImageNames.push(this.imageNameLists[j]);
      }
    }
    this.imageLists = [];
    this.imageLists = this.newImageLists;
    this.imageNameLists = [];
    this.imageNameLists = this.newImageNames;

    this.newImgLength = Object.keys(this.imageLists).length;
    this.newImageNamesList = [];
    for (let k = 0; k < this.newImgLength; k++) {
      this.newImageNamesList.push(this.imageNameLists[k]);
    }
    this.imageNames = []
    this.imageNames = this.newImageNamesList;

  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  closeModal(): void {
    this.imagedialogRef.close({ imageNameLists: this.imageNameLists });
  }

}
