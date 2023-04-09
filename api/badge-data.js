export default async function handler(req, res) {
const search = req.query.search || '';
    var badgeData = [
     {   "badgeName": "Amazon Cognito",
        "badgeIcon": 'https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg', 
        "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
        "descriptionLink": new URL('https://www.youtube.com/watch?v=dQw4w9WgXcQ', import.meta.url).href,
        "linkName": "Cognito Info Link",
        "breakLine": "------------------------------",
        "creatorIcon": "Test2",
        "badgeCreator": "Joshua Hantman",
        "compTime": "1.0 hour"
    },
    {   "badgeName": "Amazon | AM",
        "badgeIcon": 'https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1',
        "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
        "descriptionLink":  new URL('https://www.youtube.com/watch?v=IEt8aHdxSHE', import.meta.url).href,
        "linkName": "Cognito Info Link",
        "breakLine": "------------------------------",
        "creatorIcon": "Test2",
        "badgeCreator": "Joshua Hantman",
        "compTime": "1.0 hour"
    },
    {   "badgeName": "Signing up for AWS Web Services",
         "badgeIcon": 'https://i.pcmag.com/imagery/reviews/0179dSC1AqaTy8DbcTJMDYE-7..v1569472044.jpg',
        "badgeDescription": "Learn ",
        "descriptionLink": new URL('https://www.youtube.com/watch?v=dQw4w9WgXcQ', import.meta.url).href,
        "linkName": "Cognito Info Link",
        "breakLine": "------------------------------",
        "creatorIcon": "Test2",
        "badgeCreator": "Joshua Hantman",
        "compTime": "1.0 hour"
    },
    {   "badgeName": "AWS-LAMBDA Phase 1",
        "badgeIcon": 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/306854381/original/f5ba46970eb2047541316dc6e307c03ef2764a8d/create-a-simple-microservice-using-python-and-aws-lambda.png',
        "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
        "descriptionLink": new URL('https://www.youtube.com/watch?v=dQw4w9WgXcQ', import.meta.url).href,
        "linkName": "Cognito Info Link",
        "breakLine": "------------------------------",
        "creatorIcon": "Test2",
        "badgeCreator": "Joshua Hantman",
        "compTime": "1.0 hour"
    },
    {   "badgeName": "Amazon S3 Phase 1",
    "badgeIcon": 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*o7BIK2xiWFJPiqKc61sxTQ@2x.jpeg', 
    "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
    "descriptionLink":   new URL('https://www.youtube.com/watch?v=IEt8aHdxSHE', import.meta.url).href,
    "linkName": "Cognito Info Link",
    "breakLine": "------------------------------",
    "creatorIcon": "Test2",
    "badgeCreator": "Joshua Hantman",
    "compTime": "99999.0 hour"
    }
    ];
    badgeData.map((badge) => {
        badge.index = badge.badgeName.toLowerCase() + " " + badge.badgeDescription.toLowerCase() + " " + badge.linkName.toLowerCase() + " " + badge.breakLine.toLowerCase() + " " + badge.creatorIcon.toLowerCase() + " " + badge.badgeCreator.toLowerCase() + " " + badge.compTime.toLowerCase();
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