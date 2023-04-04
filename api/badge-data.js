
export default async function handler(request, res) {

    const badgeData = [
   { 
        "badgeName": "Badge Name",
        "badgeIcon": "new URL('../assets/Cognito.png', import.meta.url).href;",
        "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
        "descriptionLink": "",
        "creatorIcon": "",
        "badgeCreator": "Joshua Hantman",
        "compTime": "",
    },
   
 ];

 res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
 res.setHeader("Access-Control-Allow-Credentials", "true");
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
 res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
 res.json(badgeData);

 }