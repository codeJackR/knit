// EmbeddedTweets.js
import React, { useEffect, useState } from 'react';

function EmbeddedTweets(username) {
    const [embedHtmls, setEmbedHtmls] = useState([]);

    const fetchOembedHtml = async (tweetId) => {
        try {
            // Replace "http://localhost:3000" with the URL of your server
            const response = await fetch(`http://localhost:3000/oembed?tweet_id=${tweetId}`);
            const data = await response.json();
            return data.html;
        } catch (error) {
            console.error(error);
            return '';
        }
    };

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await fetch(`http://localhost:3000/tweets?screen_name=${username}`);
                const tweets = await response.json();
                const htmlPromises = tweets.map((tweet) => fetchOembedHtml(tweet.id_str));
                const htmls = await Promise.all(htmlPromises);
                setEmbedHtmls(htmls);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTweets();
    }, [username]);

    return (
        embedHtmls
    );
};

export default EmbeddedTweets;
