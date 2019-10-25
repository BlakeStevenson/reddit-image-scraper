const RedditScraper = require("reddit-scraper");
const exec = require('child_process').exec;
const url = require('url');
const fs = require('fs');

console.log("=====================");
console.log("Reddit Meme Scraper");
console.log("by Blake Stevenson");
console.log("=====================");

 (async () => {
 	const directory = "YOUR_DIRECTORY_HERE";
 	
    const redditScraperOptions = {
        AppId: "APP_ID_HERE",
        AppSecret: "SECRET_HERE",
    };
 
    const memes = {
        Pages: 100,
        Records: 25,
        SubReddit: "memes",
        SortType: "hot",
    };
    
	const meme = {
        Pages: 100,
        Records: 25,
        SubReddit: "meme",
        SortType: "hot",
    };
    
    const dankMemes = {
        Pages: 100,
        Records: 25,
        SubReddit: "dankmemes",
        SortType: "hot",
    };
    
    const funny = {
        Pages: 100,
        Records: 25,
        SubReddit: "funny",
        SortType: "hot",
    };
    
    const comedyCemetery = {
        Pages: 100,
        Records: 25,
        SubReddit: "comedycemetery",
        SortType: "hot",
    };
    
    const memeEconomy = {
        Pages: 100,
        Records: 25,
        SubReddit: "memeeconomy",
        SortType: "hot",
    };
    
    try {
    	const redditScraper = new RedditScraper.RedditScraper(redditScraperOptions);
    	console.log("Configuration Loaded!");
    	var memesData = await redditScraper.scrapeData(memes);
    	console.log("Memes Subreddit Scraped!")
    	var memeData = await redditScraper.scrapeData(meme);
    	console.log("Meme Subreddit Scraped!");
    	var dankMemesData = await redditScraper.scrapeData(dankMemes);
    	console.log("DankMemes Subreddit Scraped!");
    	var funnyData = await redditScraper.scrapeData(funny);
    	console.log("Funny Subreddit Scraped!");
    	var comedyCemeteryData = await redditScraper.scrapeData(comedyCemetery);
    	console.log("ComedyCemetery Subreddit Scraped!");
    	var memeEconomyData = await redditScraper.scrapeData(memeEconomy);
    	console.log("MemeEconomy Subreddit Scraped!");

	const scrapedData = [].concat.apply([], [memesData, memeData, dankMemesData, funnyData, comedyCemeteryData, memeEconomyData]);
        console.log(scrapedData.length);
	var memeCount = 0;
        for(i = 0; i < scrapedData.length; i++) {
        	var link = scrapedData[i].data.url;
        	var file_name = url.parse(link).pathname.split('/').pop();    	
        	try {
  if(fs.existsSync(directory + "/" + file_name)) {
    console.log("File already exists! Skipping...");
  } else {
  	exec('wget -O ' + directory + "/" + file_name + ' ' + link);
  	console.log("Saved " + file_name + "! (" + i + ")");
	memeCount++; 
 }
} catch(err) {
  console.error(err)
}
  }
console.log("=========");
console.log(memeCount + " memes successfully downloaded!");
exec("rm -rf " + directory + "/*.gifv");
exec('cd ' + directory + ' && find . -type f  ! -name "*.*"  -delete')
console.log("Deleted .gifv and extensionless files.")
    } catch (error) {
        console.error(error);
    }
 
})();
