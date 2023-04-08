export default async function handler(req, res) {
const search = req.query.search || '';
    var badgeData = [
     {   "badgeName": "Amazon Cognito",
        "badgeIcon": new URL('../assets/Cognito.png', import.meta.url).href,
        "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
        "descriptionLink": new URL('https://www.youtube.com/watch?v=dQw4w9WgXcQ', import.meta.url).href,
        "linkName": "Cognito Info Link",
        "breakLine": "------------------------------",
        "creatorIcon": "Test2",
        "badgeCreator": "Joshua Hantman",
        "compTime": "1.0 hour"
    },
    {   "badgeName": "Amazon | AM",
        "badgeIcon": new URL('../assets/CAWS-IAM-Exploitation.png.png', import.meta.url).href,
        "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
        "descriptionLink": "Test1",
        "linkName": "Cognito Info Link",
        "breakLine": "------------------------------",
        "creatorIcon": "Test2",
        "badgeCreator": "Joshua Hantman",
        "compTime": "1.0 hour"
    },
    {   "badgeName": "Signing up for AWS Web Services",
         "badgeIcon": new URL('../assets/amazon-web-services_vxmp.png', import.meta.url).href,
        "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
        "descriptionLink": "Test1",
        "linkName": "Cognito Info Link",
        "breakLine": "------------------------------",
        "creatorIcon": "Test2",
        "badgeCreator": "Joshua Hantman",
        "compTime": "1.0 hour"
    },
    {   "badgeName": "AWS-LAMBDA Phase 1",
        "badgeIcon": new URL('../assets/Lambda.png', import.meta.url).href,
        "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
        "descriptionLink": "Test1",
        "linkName": "Cognito Info Link",
        "breakLine": "------------------------------",
        "creatorIcon": "Test2",
        "badgeCreator": "Joshua Hantman",
        "compTime": "1.0 hour"
    },
    {   "badgeName": "Amazon S3 Phase 1",
    "badgeIcon": new URL('../assets/S3.png', import.meta.url).href,
    "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
    "descriptionLink": "Test1",
    "linkName": "Cognito Info Link",
    "breakLine": "------------------------------",
    "creatorIcon": "Test2",
    "badgeCreator": "Joshua Hantman",
    "compTime": "1.0 hour"
    }
    ];
    badgeData.map((badge) => {
        badge.index = badge.badgeName.toLowerCase() + " " + badge.badgeIcon.toLowerCase() + " " + badge.badgeDescription.toLowerCase() + " " + badge.descriptionLink.toLowerCase() + " " + badge.linkName.toLowerCase() + " " + badge.breakLine.toLowerCase() + " " + badge.creatorIcon.toLowerCase() + " " + badge.badgeCreator.toLowerCase() + " " + badge.compTime.toLowerCase();
    });

    badgeData = badgeData.filter((badge) => {
        return badge.index.indexOf(search.toLowerCase()) > -1;
    });
    console.log(badgeData);
res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
res.json(badgeData);
}