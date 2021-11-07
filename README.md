## Deploy React to AWS S3 using GitHub Action

### Setup

* Copy the content in `.github/workflows/main.yml` file in this repository to your `.github/workflows/main.yml` file.
### Configuration 

* Add the following to your our Github secrets (under settings->secrets tab).
    
    * `AWS_PRODUCTION_BUCKET_NAME` = Your S3 bucket name
    * `AWS_REGION` = Your AWS region
    * `AWS_ACCESS_KEY_ID` = Your AWS access key
    * `AWS_SECRET_ACCESS_KEY` = Your AWS secret key

* For AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY ,
    Please go to "My security credentials"
* Click "create access key", 
* Copy `access key id` and `secret access key id` , 
* Paste them to Github secrets.

### Deploy

* After commiting your change, then go to your Github repository and click on `actions` tab.
* Then click on `CI` action.
* Then click on `Run` button.