# reddit-image-scraper
Get memes or images using the Reddit API

### Install:

#### Step 1: Download
```git clone https://github.com/blakestevenson/reddit-image-scraper.git```

#### Step 2: Install Dependencies
```npm install```

#### Step 3: Configure
Open `index.js` in your favorite editor and change the options in the `redditScraperOptions` object. You may obtain the App ID and Secret from https://reddit.com/prefs/apps. You also need to configure the directories. To do this, edit the `directory` variable to include the full path to the folder where you would like to save your memes (for example, `/home/user/memes`)
```
const directory = "YOUR_DIRECTORY"; // do not add any trailing slash

const = redditScraperOptions {
"AppId": "YOUR_APP_ID_HERE",
"AppSecret": "YOUR_SECRET_HERE",
};
