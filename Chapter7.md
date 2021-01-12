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

# Travis CI Setup

- sign up with Github
- Profile => Settings => activate Deploying-to-AWS-with-TravisCI repo

```yml
# - docker run buraku/sample-app npm run test -- --coverage
```

-- --coverage was used since previos versions of react test suit doesn't exist, but it's no more the case

the only thing that Travis cares about is the status code that comes back from running this command.

```bash
$ git add .travis.yml
$ git commit -m "added travis config file"

```

## Elastic Beanstalk

- Create a new application

name: Deploying-to-AWS-with-TravisCI

tag : demo

platform: Docker
branch : Linux 2
version :recommended

application code :sample

# Update travis.yml for AWS Elastic Beanstalk

```yml
access_key_id: $AWS_ACCESS_KEY
secret_access_key: $AWS_SECRET_KEY
```

Travis CI Env Variables
repo => more options => settings => env variables

```bash
$ git commit -m "added travis deploy config"
```

UPDATE DOCKERFILE

```yml
EXPOSE 80
```

So by default on our machines like your laptop from my laptop just putting in this instruction does absolutely nothing for us automatically.

elastic beanstalk is just a little bit different elastic beanstalk when it starts up your container it's going to look for the EXPOSE instruction and then whatever port you list in there is what elastic beanstalk is going to map directly automatically.
