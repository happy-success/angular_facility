// ----------------------------- -----------------------------
//
// WHAT IS THIS FILE FOR ?
// a list of companies used in this facility as they are all
// rather scattered around.
// 
// ----------------------------- -----------------------------
// COMMENTS !
// users can CRUD contacts within a facility.
// have app level read-only datastore for companies
// have facility level CRUD store for entries not in global.
// 
// ----------------------------- -----------------------------
// SECURITY CONCERNS
// * buggering up a global database of contacts.
// 
// ----------------------------- -----------------------------
// PROBLEMS
//
//
// ----------------------------- -----------------------------
// IMPORTS
// import * as asc from './app-secuirty-config';
// 
// ----------------------------- -----------------------------






export const facilityCustomCompanies = [
    {
        id: 'guid',
        name: 'Custom Company Limited',
        address: { // optional
            line1: '3 Orchard Mews',
            line2: 'Seer Green',
            line3: 'Beaconsfield',
            line4: 'Buckinghamshire',
            postcode: 'HP9 2YB',
        },
        companyNumber: '10040773', // only robust way to id a company.
        country: 'Andorra',
        url: 'www.facilityblarr.com',
        email: 'hello@facilityblarr.com' // needed for COBie.
    },
    {
        id: 'guid',
        name: 'Another Company added to this facility',
        companyNumber: '3345345345', // only robust way to id a company.
        country: 'Angola',
        url: 'www.AnotherLimited.com',
        email: 'hello@AnotherLimited.com' // needed for COBie.
    },

]