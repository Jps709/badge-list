export default async function handler(req, res) {
    const search = req.query.search || '';
        var badgeData = [
         {   
            "tag": "Amazon Cognito",
            "stepIcon": "Test8",
            "stepName": "test",
            "stepTime": "4.0 Hours"
        },
        {   "tag": "Amazon | AM",
        "stepIcon": "Test8",
        "stepName": "test",
        "stepTime": "4.0 Hours"
        },
        {   "tag": "Signing up for AWS Web Services",
        "stepIcon": "Test8",
        "stepName": "test",
        "stepTime": "4.0 Hours"
        },
        {   "tag": "AWS-LAMBDA Phase 1",
        "stepIcon": "Test8",
        "stepName": "test",
        "stepTime": "4.0 Hours"
        },
        {   "tag": "Amazon S3 Phase 1",
        "stepIcon": "Test8",
            "stepName": "test",
            "stepTime": "4.0 Hours"
        }
        ];
        badgeData.map((step) => {
            step.index = step.stepIcon.toLowerCase() + " " + step.stepName.toLowerCase() + " " + step.stepTime.toLowerCase();
        });
    
        badgeData = badgeData.filter((step) => {
            return step.index.indexOf(search.toLowerCase()) > -1;
        });
        console.log(badgeData);
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgeData);
    }