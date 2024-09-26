const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const dotenv = require('dotenv');
const Search = require('./models/search');
const path = require('path');

dotenv.config();

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from public folder
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

// app.get('/test', (req, res) => {
//     res.sendFile(path.join(__dirname, "public/css/style.css"));
// });

// Homepage route
app.get("/", (req, res) => {
    res.render("index");
});

// Search route for handling the APIs and saving searches to MongoDB
app.get('/search', async (req, res) => {
    const query = req.query.q;

    // Save the search query in MongoDB
    const newSearch = new Search({ query });
    await newSearch.save();

    try {
        // Fetch from YouTube API
        const youtubeResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                part: 'snippet',
                q: query,
                key: process.env.YOUTUBE_API_KEY
            }
        });

        // Fetch from News API
        const newsResponse = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: query,
                apiKey: process.env.NEWS_API_KEY
            }
        });

        // Fetch from Google Scholar API (SerpAPI)
        const scholarResponse = await axios.get(`https://serpapi.com/search.json`, {
            params: {
                engine: 'google_scholar',
                q: query,
                api_key: process.env.SERPAPI_KEY
            }
        });

        // Send the results to the frontend
        res.json({
            youtube: youtubeResponse.data.items,
            news: newsResponse.data.articles,
            scholar: scholarResponse.data.organic_results
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
