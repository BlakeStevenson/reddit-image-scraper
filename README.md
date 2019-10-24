# reddit-image-scraper
Get memes or images using the Reddit API

### Install:

Step 1: Download
```git clone https://github.com/blakestevenson/reddit-image-scraper.git```

Step 2: Install Dependencies
```npm install```

Step 3: Configure
Open `index.js` in your favorite editor and change the otions in the `config` object. You may obtain the App ID and Secret from https://reddit.com/prefs/apps
```
var config = {
"appID": "YOUR_APP_ID_HERE",
"secret": "YOUR_SECRET_HERE",
"subreddits": [
"memes",
"meme",
"dankmemes",
"memeeconomy"
]
}
