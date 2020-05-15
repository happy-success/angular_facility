// ----------------------------- -----------------------------
// WHAT IS THIS FILE FOR ?
// This file holds the definition of the facility, its config and settings.
//
// ----------------------------- -----------------------------
// COMMENTS !
// localisation will control date formts, telephone number format
// and possibley extend to translation of ionterface. where 
// possible store all data in universal format.
// ----------------------------- -----------------------------
// SECURITY CONCERNS
//
// ----------------------------- -----------------------------
// PROBLEMS
// TODO:  how do we control the length of fields, and input validation?
// do we put clasifications in at this levl?
// facility level subscription, cafm subscription does it go in here?
// cafm in this doc? or cafm summary in here ?
//
// What to call this file IF NOT facility then what name? 
// Union, Group, Organisation, ??
//
// ----------------------------- -----------------------------
// IMPORTS
import * as ac from './app-country-list';


//
// ----------------------------- -----------------------------

export const Facility =  // save object should look something like this.
{
	id: '003aaaaa-a17f-43f5-b1da-a267cfb34f2a', //  primary key
	siteId: '002aaaaa-a17f-43f5-b1da-a267cfb34f2a', // site.site.id, // foreign key
	name: 'Main Building',
	address: {
		line1: 'Edocuments ltd',
		line2: '32 Waterhouse business centre',
		line3: 'Chelmsford',
		line4: 'Essex',
		postcode: 'CM3 4EG',
		country: 'United Kingdom',
		url: 'edocuments.co.uk',
		//  latLng: '51.507351,-0.127758', // from google API
		overriddenLat: 51.507351, // from user manual input.
		overriddenLng: -0.127758, // from user manual input.
	},
	tags: ['Critical', 'Headquarters', 'Service buildings'],
	images: ['image1.png', 'image2.png', 'image3.png'], // use file upload, get 
	// filename and ignore upload

	attributes: {
		drawingPrefixCode: 'EDO', // from facilityAttributes/drawingPrefixCode
		linearUnits: "m", // selected from facilityAttributes/linearUnits
		volumeUnits: "m^3",
		areaUnits: "m^2",
		currencyUnits: "£ GBP",  // from facilityAttributes/currencyUnits
		// admin can add more rows here.
		description: '', // optional additiaonal description.

	}

}


export const facilityAttributesPickList = [
	{
		key: 'drawingPrefixCode',
		label: 'Drawing Prefix Code',
		controlType: 'textbox',
		type: 'string',
		maxLength: 3, // could do with validation, but better to restict input?
		required: true,
	},
	{
		key: 'linearUnits',
		label: 'Liner units',
		controlType: 'dropdown',
		type: 'string',
		options: [
			'mm',
			'cm',
			'm',
			'km',
			'mile'
		]
	},
	{
		key: 'areaUnits',
		label: 'Area units',
		controlType: 'dropdown',
		type: 'string',
		options: [
			'mm^2',
			'cm^2',
			'm^2'
		]
	},
	{
		key: 'volumeUnits',
		label: 'Volume units',
		controlType: 'dropdown',
		type: 'string',
		options: [
			'mm^3',
			'cm^3',
			'm^3',
			'L^3'
		]
	},
	{
		key: 'currencyUnits',
		label: 'Currency units',
		controlType: 'dropdown',
		type: 'string', // money ???
		options: [
			'$ AUD',
			'€ Euro',
			'£ GBP',
			'$ USD',
		]
	},
	{
		key: 'postcode',
		label: 'Postcode',
		controlType: 'textbox',
		type: 'string',
		inputmask: 'XXX XXX',
		required: true,
		validation: '/[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i',
	},
	{
		key: 'description',
		label: 'Description',
		controlType: 'textbox',
		type: 'string',
		maxLength: 200,
	},
	{
		key: 'country',
		label: 'Country',
		controlType: 'dropdown',
		type: 'string',
		options: ac.countryList,
	},

]

