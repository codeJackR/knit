// TwitterAPI.js
import Twitter from 'twitter-lite';

// Replace with your own credentials
const apiKey = 'HpeNkZvuLth7kBg8bGC4NBBPd';
const apiKeySecret = 'iuknLnTCHLGKyRh5B8pvkAA9HCxA5PRh4iaG7cLWam9am2Pwku';
const accessToken = '154842226-GRAumE6t8rMHVQovHXsLTjG6wXJDT9AXcoZIBJZW';
const accessTokenSecret = 'C1FLCgB5SuyGKEHEmQkzrHvEo1eWH5HqzXIfCl7PLIAPc';

const client = new Twitter({
    consumer_key: apiKey,
    consumer_secret: apiKeySecret,
    access_token_key: accessToken,
    access_token_secret: accessTokenSecret,
});

export const fetchLatestTweets = async (username, count = 3) => {
    try {
        const response = await fetch(`http://localhost:3000/tweets?screen_name=${username}`);
        const tweets = await response.json();
        return tweets;
    } catch (error) {
        console.error(error);
        return [];
    }
};
