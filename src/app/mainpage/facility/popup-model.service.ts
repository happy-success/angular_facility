import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from '../address/address.component';
import { ImagesComponent } from '../images/images.component';

@Injectable()
export class PopupModelService {

    constructor(public dialog: MatDialog) { }

    line1: string;
    line2: string;
    line3: string;
    state: string;
    zip: string;
    country: string;
    latitude: number;
    longitude: number;

    openAddressDialog(): Observable<any> {

        const addressdialogRef = this.dialog.open(AddressComponent, {
            width: '320px', maxWidth: '320px', disableClose: true,
            data: {
                line1: this.line1, line2: this.line2, line3: this.line3, state: this.state, zip: this.zip, country: this.country, latitude: this.latitude, longitude: this.longitude,
            }
        });


        return addressdialogRef.afterClosed();
    }

    openImageDialog(): Observable<any> {

        const imagedialogRef = this.dialog.open(ImagesComponent, {
            width: '320px', maxWidth: '320px', height: '568px', disableClose: true,
            data: {
                //
            }
        });

        return imagedialogRef.afterClosed();
    }
}