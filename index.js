const RedditScraper = require("reddit-scraper");
const exec = require('child_process').exec;
const url = require('url');
const fs = require('fs');

console.log("=====================");
console.log("Reddit Meme Scraper");
console.log("by Blake Stevenson");
console.log("=====================");
console.log("");

 (async () => {
    const directory = "YOUR_DIRECTORY";
    
    const redditScraperOptions = {
        AppId: "YOUR_APP_ID",
        AppSecret: "APP_SECRET",
    };
 
    const memes = {
        Pages: 100,
        Records: 25,
        SubReddit: "memes",
        SortType: "hot",
    };
    
	/* const meme = {
        Pages: 100,
        Records: 25,
        SubReddit: "meme",
        SortType: "hot",
    }; */
    
    const dankMemes = {
        Pages: 100,
        Records: 25,
        SubReddit: "dankmemes",
        SortType: "hot",
    };
    
    const deepFriedMemes = {
        Pages: 100,
        Records: 25,
        SubReddit: "deepfriedmemes",
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
    	console.log("Memes Subreddit Scraped!");
    	//var memeData = await redditScraper.scrapeData(meme);
    	//console.log("Meme Subreddit Scraped!");
    	var dankMemesData = await redditScraper.scrapeData(dankMemes);
    	console.log("DankMemes Subreddit Scraped!");
    	var deepFriedMemesData = await redditScraper.scrapeData(deepFriedMemes);
    	console.log("DeepFriedMemes Subreddit Scraped!");
    	var comedyCemeteryData = await redditScraper.scrapeData(comedyCemetery);
    	console.log("ComedyCemetery Subreddit Scraped!");
    	var memeEconomyData = await redditScraper.scrapeData(memeEconomy);
    	console.log("MemeEconomy Subreddit Scraped!");

	const scrapedData = [].concat.apply([], [memesData, /*memeData,*/ dankMemesData, deepFriedMemesData, comedyCemeteryData, memeEconomyData]);
	var memeCount = 0;
	var skipCount = 0;
	var invalidCount = 0;
        for(i = 0; i < scrapedData.length; i++) {
        	var link = scrapedData[i].data.url;
        	var file_name = url.parse(link).pathname.split('/').pop();   
			var ext = file_name.split('.').pop();
			if(ext == "jpg" || ext == "jpg" || ext == "gif") {
        	try {
 			if(fs.existsSync(directory + "/" + file_name)) {
    			//console.log("File already exists! Skipping...");
    			skipCount++;	
  } else {
  	exec('wget -O ' + directory + "/" + file_name + ' ' + link);
  	// console.log("Saved " + file_name + "! (" + i + ")");
  	
	memeCount++; 
 }
} catch(err) {
  console.error(err);
}
} else {
	invalidCount++;
}
  }
console.log("");
console.log("---------");
console.log(memeCount + " memes successfully downloaded.");
console.log(skipCount + " memes already downloaded.");
console.log(invalidCount + " memes skipped because of an invalid format.");
console.log("---------");
console.log(scrapedData.length + " total memes fetched.");
console.log("---------");
fs.readdir(directory, function(err, files) {
	console.log(files.length + " total memes in " + directory);
});
    } catch (error) {
        console.error(error);
    }
 
})();
