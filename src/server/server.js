require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/tweets", async (req, res) => {
    const { screen_name } = req.query;

    try {
        const response = await axios.get(
            `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screen_name}&count=3&tweet_mode=extended&include_rts=false&exclude_replies=true`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch tweets" });
    }
});

app.get("/oembed", async (req, res) => {
    const { tweet_id } = req.query;

    try {
        const response = await axios.get(
            `https://api.twitter.com/1.1/statuses/oembed.json?id=${tweet_id}&omit_script=true`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch oEmbed HTML" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
