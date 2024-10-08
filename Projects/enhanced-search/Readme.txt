Project Title: Web Search Engine

This project is a simple search engine web application where users can input a search query to retrieve results from YouTube, news articles, and academic papers (Google Scholar). The application uses APIs from these services and organizes the results in a responsive grid layout with a card-based design.

---

Project Features:

- Search functionality that fetches results from YouTube, news articles, and Google Scholar.
- Displays results in a card-based grid layout (4 columns, up to 12 results per section).
- Responsive design for mobile and tablet view.
- Integration with external APIs to fetch content.
- Server-side rendering using EJS (Embedded JavaScript).
- Backend built using Node.js with Express.
- MongoDB integration using Mongoose to store recent search queries.

---

Project Structure:

```
project-root/
│
├── views/
│   └── index.ejs           # EJS template for the main page.
│
├── public/
│   ├── css/
│   │   └── style.css        # Contains the CSS for styling the webpage.
│   ├── js/
│   │   └── main.js          # Frontend logic for fetching and displaying results.
│
├── models/
│   └── searchModel.js       # MongoDB model to store recent search queries.
│
├── routes/
│   └── search.js            # Express route for handling search requests and fetching data from APIs.
│
├── app.js                   # Main entry point for the Node.js server.
├── package.json             # Project dependencies and scripts.
├── README.txt               # Project documentation.
└── .env                     # API keys for YouTube, News API, and Google Scholar API.
```

---

Prerequisites:

Before running this project, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (Version 14.x or above)
- [MongoDB](https://www.mongodb.com/) (either a local instance or an online service like MongoDB Atlas)
- Access to APIs:
  - [YouTube Data API](https://developers.google.com/youtube/v3/getting-started)
  - [News API](https://newsapi.org/)
  - [Google Scholar API](custom implementation or a public API wrapper)

---

Installation and Setup:

1. Clone the repository:
   ```
   git clone <your-repository-url>
   cd <your-project-folder>
   ```

2. Install Dependencies:
   In the project root directory, run:
   ```
   npm install
   ```

3. Set Up Environment Variables:
   Create a `.env` file in the root directory and add the following API keys:
   ```
   YOUTUBE_API_KEY=<your-youtube-api-key>
   NEWS_API_KEY=<your-news-api-key>
   ```

   Optional: Add MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. Run MongoDB:
   If you're using a local instance of MongoDB, make sure it's running:
   ```
   mongodb
   ```

5. Start the Server:
   To start the Node.js server, run:
   ```
   npm start
   ```
   The server will run on `http://localhost:3000`.

---

Usage:

1. Open your browser and go to `http://localhost:3000`.
2. Enter a search query in the search box.
3. Click on the "Search" button to retrieve results from YouTube, news articles, and Google Scholar.
4. The results will be displayed in a grid format, showing up to 12 results for each section.
5. Click on the links in the results to view the videos or read articles.

---

APIs Used:

- YouTube Data API: Fetches video results based on the user's query.
- News API: Retrieves relevant news articles based on the query.
- Google Scholar API: Fetches academic papers (optional, depending on the API integration).

---

Customization:

- Styling: You can update the layout and appearance of the webpage by modifying the `public/css/style.css` file.
- API Integration: To add more sources or modify existing API requests, refer to the logic in `routes/search.js`.

---
Known Issues:

- The Google Scholar API might require custom solutions or public API wrappers, as there is no official public API from Google Scholar.
- API rate limits: Ensure that your API usage stays within the limits imposed by each service (YouTube, News API).

