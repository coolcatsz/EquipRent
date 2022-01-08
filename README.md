# EquipRent

EquipRent is an app that allows reliable access to items in close proximity for short term rentals. (safety not guaranteed)

**Overview of App**

When the user first opens the webpage, they'll be prompted to login with their google account. Once logged in the user see the homepage that features all of the items available to rent. They can click on an image of an item to get more iformation about it as well as decide which dates to block out to rent. They'll also see an option to bookmark an item for later use that will show up on the user's bookmarks tab. There is also an option to toggle between a dark and light mode in the navigation bar. A user can also search for specific items and in doing so, those items will appear on a map to show you their location and prices.

**Installation/ Startup**

To get started, once the repo is cloned onto your local workspace, run ```npm install``` to make sure all of the dependencies are there. Then you'll want to create an ```.env``` file in the root directory, this is where all of your necessary keys will go.

```USER_NAME
USER_PASSWORD
DATABASE=equiprent
DB_PORT=5432
PORT=3000
HOST=localhost
GOOGLE_CLIENTID=yourid
GOOGLE_CLIENT_SECRET=yoursecret
COOKIE_KEY=yourkey
```


In two separate terminals, run ```npm start``` and ```npm run dev```, for more info on the scripts we used, look at the ```package.json``` file in the root directory.

For this project we used PostgreSQL for our database. You'll need to seed our dummy data into the database to populate the application's homepage. To do this, you'll need to run npm run seed in a separate terminal after you've shelled into the postgres shell and created a database and connected to it.

**Google OAuth**

Google Oauth requires a google cloud account. First create your account and then navigate to the developer console. Go to google API and create a clientID and clientSecret. This goes inside the .env file.

**APIs Used**
Google Maps

Stripe Payment

