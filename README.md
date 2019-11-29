# getir_case
A simple Node.js Express api that handles the post requests

Send your requests to the /getir_test/records with a Json Body like:
{ 
  "startDate": "2016-01-26", 
  "endDate": "2018-02-02", 
  "minCount": 2100, 
  "maxCount": 2100 
}

Response will be like this:
{
    "code": 0,
    "msg": "Success",
    "records": [
        {...
        }
    ]
}
