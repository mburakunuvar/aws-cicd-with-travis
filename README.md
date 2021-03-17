# aws-cicd-with-travis

## Git Setup

```bash
$ echo "# Deploying-to-AWS-with-TravisCI" >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin https://github.com/mburakunuvar/Deploying-to-AWS-with-TravisCI.git
$ git push -u origin main
```

## Travis CI Setup

- sign up with Github
- Profile => Settings => activate Deploying-to-AWS-with-TravisCI repo

travis.yml file :

```yml
language: generic
sudo: required
services:
  - docker

before_install:
  - docker build -t burakunuvar/sample-app -f Dockerfile.dev .

script:
  #   - docker run buraku/sample-app npm run test -- --coverage
  - docker run -e CI=true burakunuvar/sample-app npm test
```

## AWS Elastic Beanstalk

### necessary updates on Dockerfile

- Expose port 80 for nginx
- replace 'builder' with 0

```yml
FROM nginx
EXPOSE 80 #needed for elastic beanstalk
COPY --from=0 /app/build /usr/share/nginx/html
```

### Initial Setup

1. Go to AWS Management Console

2. Search for Elastic Beanstalk in "Find Services"

3. Click the "Create Application" button

4. Enter "docker" for the Application Name

5. Scroll down to "Platform" and select "Docker" from the dropdown list.

6. Change "Platform Branch" to Docker running on 64bit Amazon Linux

7. Click "Create Application"

8. You should see a green checkmark after some time.

9. Click the link above the checkmark for your application. This should open the application in your browser and display a Congratulations messag

### Change from Micro to Small instance type:

1. In the left sidebar under Docker-env click "Configuration"

2. Find "Capacity" and click "Edit"

3. Scroll down to find the "Instance Type" and change from t2.micro to t2.small

4. Click "Apply"

5. The message might say "No Data" or "Severe" in Health Overview before changing to "Ok"

### Add AWS configuration details to .travis.yml file's deploy script

1. Set the region. The region code can be found by clicking the region in the toolbar next to your username.

eg: 'us-east-1'

2. app should be set to the Application Name (Step #4 in the Initial Setup above)

eg: 'docker'

3. env should be set to the lower case of your Beanstalk Environment name.

eg: 'docker-env'

4. Set the bucket_name. This can be found by searching for the S3 Storage service. Click the link for the elasticbeanstalk bucket that matches your region code and copy the name.

eg: 'elasticbeanstalk-us-east-1-923445599289'

5. Set the bucket_path to 'docker'

6. Set access_key_id to $AWS_ACCESS_KEY

7. Set secret_access_key to $AWS_SECRET_KEY

### Create an IAM User

1. Search for the "IAM Security, Identity & Compliance Service"

2. Click "Create Individual IAM Users" and click "Manage Users"

3. Click "Add User"

4. Enter any name you’d like in the "User Name" field.

eg: docker-react-travis-ci

5. Tick the "Programmatic Access" checkbox

6. Click "Next:Permissions"

7. Click "Attach Existing Policies Directly"

8. Search for "beanstalk"

9. Tick the box next to "AWSElasticBeanstalkFullAccess"

10. Click "Next:Tags"

11. Click "Next:Review"

12. Click "Create user"

13. Copy and / or download the Access Key ID and Secret Access Key to use in the Travis Variable Setup.

## Travis Variable Setup

1. Go to your Travis Dashboard and find the project repository for the application we are working on.

2. On the repository page, click "More Options" and then "Settings"

3. Create an AWS_ACCESS_KEY variable and paste your IAM access key from step #13 above.

4. Create an AWS_SECRET_KEY variable and paste your IAM secret key from step #13 above

## Deploying App

1. Make a small change to your src/App.js file in the greeting text.

2. In the project root, in your terminal run:

git add.
git commit -m “testing deployment"
git push origin master 3. Go to your Travis Dashboard and check the status of your build.

4. The status should eventually return with a green checkmark and show "build passing"

5. Go to your AWS Elasticbeanstalk application

6. It should say "Elastic Beanstalk is updating your environment"

7. It should eventually show a green checkmark under "Health". You will now be able to access your application at the external URL provided under the environment name.

```

```

### UPDATE DOCKERFILE FOR AWS Beanstalk

```yml
EXPOSE 80
```

So by default on our machines like your laptop from my laptop just putting in this instruction does absolutely nothing for us automatically.

elastic beanstalk is just a little bit different elastic beanstalk when it starts up your container it's going to look for the EXPOSE instruction and then whatever port you list in there is what elastic beanstalk is going to map directly automatically.

### UPDATE DOCKERFILE FOR AWS Beanstalk

```dockerfile
FROM node:alpine
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html
```

### Merge with Branches

```bash

$ git checkout -b branch
# update App.js
$ git add .
$ git commit -m "changed app text for branch"
$ git push origin branch

#compare and pull request

// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```
