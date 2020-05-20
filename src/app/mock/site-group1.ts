// ----------------------------- -----------------------------
//
// WHAT IS THIS FILE FOR ?
// a single site group 
// organisation of sites and facilities
//
// ----------------------------- -----------------------------
// COMMENTS !
// This should be the partition group in node db
// this is the logical security container 
// ----------------------------- -----------------------------
// SECURITY CONCERNS

// ----------------------------- -----------------------------
// PROBLEMS
// 
// ----------------------------- -----------------------------
// IMPORTS
import * as org from './app-organisations';
import * as langAU from './lang/eng-au';
// ----------------------------- -----------------------------



export const siteGroup =
{
    id: '001aaaaa-a17f-43f5-b1da-a267cfb34f2a',
    name: 'Plume School Campus',
   
    // subscription: { // Client pays this OR employers-rep.
    //     id: '113566', //our link to edocuments accounts platform such as quoteRef, not-editable XeroAccountsLink
    //     organisationId: org.organisation.id, // look up from organisation.ts
    //     status: 'active', //, ,expired, cancelled, on-hold, dispute?? // not editable by project admin?
    //     stage: [ // subscription covers these stages. 7 == CAFM
    //     ],
    //     billingEmail: 'accounts-department@company.com', // not editable by project admin?
    //     billing: 'annual', // dont want monthly, 3yr?, could be fixed-duration?
    //     lastRenewed: new Date('2020-1-17'),
    //     nextRenewal: new Date('2021-1-17'),
    //     //TODO: anayconstraints on the subscription, up 300 users.
    //     maxAllowedUsers: 50, // or unlimited for a fee.
    //     // 1 admin,
    //     // 5 engineers,?????
    //     // more than 50 additional subcription.
    //     // maxAllowedSections or packages
    //     // cost, monthy fee? overrun fee / rate.
    // },
}

