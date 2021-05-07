# Blog App

This [MERN]("https://www.mongodb.com/mern-stack") project is a Blogging Application named "Blog App".
The following instructions will walk you through the installation, set up, and usage of the app.
Please go through carefully to avoid any confusions or blunders...
All the Best!!

## Installation

Clone this repository onto your device.
Open root directory of this project in your terminal window and run:

```bash
cd client
npm install
```

Open another terminal window (root directory) and run:

```bash
cd server
npm install
```

## Database

Create a [MongoDB]("https://www.mongodb.com/") database with a relevant name (like: BloggingAppDatabase). You can use either of the following

- [Local Server]("https://docs.mongodb.com/manual/") - For your database to be locally present on your device.
- [MongoDB Atlas]("https://docs.atlas.mongodb.com/") - For your database to be present on the cloud.

## Set up environment

This project will require you to set up some environment variables.

- Make a .env file in server directory
- Enter the following environment variables into it
- Change their values according to your needs:

Environment Variables:

```notepad
ACCESS_TOKEN_SECRET = yourAccessTokenSecret
REFRESH_TOKEN_SECRET = yourRefreshTokenSecret
DBHOSTNAME = yourDatabaseHostName
DBNAME = yourDatabaseName
```

Here, these variables represent:

- ACCESS_TOKEN_SECRET - This is the secret key of your access token and should be long, unique, like some long random string.

- REFRESH_TOKEN_SECRET - This is the secret key of your refresh token and should be long, unique, like some long random string.

- DBHOSTNAME - This is the hostname of your database.

- DBNAME - This is the name of your database.

## Usage

Open root directory of this project in your terminal window and run:

```bash
npm run client
```

Open another terminal window (root directory) and run:

```bash
npm run server
```

Hope you enjoyed setting up this project and running it... Happy Blogging!
