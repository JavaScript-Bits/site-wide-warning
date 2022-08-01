# Site Wide Warning

Throughout this interview, if you have any concerns or questions regarding the logistics or technical specifications of this coding challenge, please directly email support@litebulb.io. Otherwise, please reach out to your recruiter.

## Background
All web applications experience catastrophic failures at some point or another. For example, if the "Post" feature suddenly stopped working on Facebook, that's considered a catastrophic failure, and users should get some kind of a warning or notification that their posts might not get successfully created. This could either happen automatically, or administrators of Facebook should have access to an admin console where they can choose to broadcast a warning to all users of Facebook that are being affected.

## Stack
**Database**: MongoDB

**Web Server**: Node.js, Express.js, Apollo Server, Mongoose.js

**Web App Client**: React.js, Recoil.js, Apollo Client

## Set up for local development

To begin setting up this app, you'll need to have docker compose installed locally 
- [Docker Compose](https://docs.docker.com/compose/install/)

After you've cloned this project repo, run 
```
docker-compose up --build
```

This spins up a GraphQL playground at [http://localhost:8000/](http://localhost:8000/), and the app at [http://localhost:3000/](http://localhost:3000/).  
From the GraphQL playground, seed some users (follow the instructions below).  
Your dev environment is now ready! 🚀 Go to the Issues tab to begin your assigned tasks.  


## Seed Users Data
Before you begin building your solution, you'll need to create a couple (at least 2) users in your database first.
The User schema, Query, and Mutation endpoints have already been given to you.
To run a user creation mutation call, include this in the main query window in [http://localhost:8000](http://localhost:8000):
```
mutation CreateUser($user: CreateOneUserInput!){
  userCreateOne(record: $user) {
    record {
      firstName
      lastName
      email
    }
  }
}
```

Then, add user details in the Query Variables window (you can use whatever name and email you want):
```
{
  "user": {
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  }
}
```

The response should look something like: 
```
{
  "data": {
    "userCreateOne": {
      "record": {
        "firstName": "John",
        "lastName": "Smith",
        "email": "john@smith.com"
      }
    }
  }
}
```

Now, when you run a query to get users:
```
query {
  userCount
  userMany(limit: 10) {
    firstName
    lastName
    email
  }
}
```
you should see a response that looks like:
```
{
  "data": {
    "userCount": 1,
    "userMany": [
      {
        "firstName": "John",
        "lastName": "Smith",
        "email": "john@smith.com"
      }
    ]
  }
}
```
Now, when you open the app on the browser, click on the "Change Users" menu item in the top right, you should see the users you created in that list.

## Submission
Prior to submission, ensure that `npm run lint` and `npm run test` don't produce any warnings or errors.

Your final submission should be in the form of a pull request from a remote branch against `main`. Once you're ready to submit, open the Pull Request, and document your changes and thought processes in the Pull Request description.

When you're sure you're ready to submit, add `litebulb-skills-bot` as a reviewer. You will lose access to the repository, and your submission will be considered closed.

## Resources

Node.js: https://nodejs.org/en/

Express.js: https://expressjs.com/

Apollo Server: https://www.apollographql.com/docs/apollo-server/

MongoDB: https://docs.mongodb.com/manual/introduction/

Mongoose: https://mongoosejs.com/docs/

React Hooks: https://reactjs.org/docs/hooks-intro.html

Recoil.js: https://recoiljs.org/

Apollo Client: https://www.apollographql.com/docs/react/



or this task, you will be building the Site-Wide Warning bar along with an admin console for administrators of the app to be able to turn warnings on and off or change them as necessary. Please reference the prototyped mock ups at this Figma link to get an understanding of how the interaction should work on completion.

To persist state server-side, you will need to make updates to the server, which is a Node.js server running Express, serving GraphQL endpoints via Apollo, and using Mongoose to interact with your local MongoDB instance. You can use the existing User schema, query, and mutation endpoints as an example. Build the server-side GraphQL schema(s) and endpoints that enable the web app to start, update, and mitigate site wide warnings.

A user must be able to dismiss the current ongoing warning. If a warning is updated to a different type, the user should see the new warning. Similarly, if a user dismissed the current warning, but it's ended, and a new warning starts, they should see the new warning.

A warning consists of at least two fields:

type: SiteWideWarningType
label: String
There are three types of warnings:

Download Server Unavailable Warning
Upload Server Unavailable Warning
Data Inconsistency Warning
Each type of warning has it's own hardcoded label which you can find in the Figma link attached above.
Note: No more than one Site Wide Warning can be ongoing at the same time.

Steps:

Set up your local dev environment first. Refer to the set up instructions in the README.
Seed your database with a few users. This is necessary to test that user-level warning dismissal. Refer to the data seeding instructions in the README.
Build your solution in both the client and server.
Log key events (ie: warning created, warning dismissed, etc) using the provided logger util. The more thorough your logs are, the better.
Write some Jest tests for the features you built. The more thorough your tests are, the better.
You are allowed to edit, remove, or add any file in this repository to complete the task.