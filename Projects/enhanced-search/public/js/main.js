document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('searchQuery').value;
    const loadingMessageDiv = document.getElementById('loading-message');
    const youtubeResultsDiv = document.getElementById('youtube-results');
    const newsResultsDiv = document.getElementById('news-results');
    const scholarResultsDiv = document.getElementById('scholar-results');

    if (!query) {
        alert('Please enter a search query');
        return;
    }

    // Clear previous results
    youtubeResultsDiv.innerHTML = '';
    newsResultsDiv.innerHTML = '';
    scholarResultsDiv.innerHTML = '';

    // Show loading message
    loadingMessageDiv.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch(`/search?q=${query}`);
        const data = await response.json();

        // Hide loading message
        loadingMessageDiv.innerHTML = '';

        // YouTube Results with Thumbnails (limited to 12)
        const youtubeResults = data.youtube.slice(0, 12).map(video => `
            <div class="card">
                <img src="${video.snippet.thumbnails.medium.url}" alt="YouTube Thumbnail" />
                <div class="card-content">
                    <p><a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">${video.snippet.title}</a></p>
                </div>
            </div>
        `).join('');

        // News Articles with Thumbnails (limited to 12)
        const newsResults = data.news.slice(0, 12).map(article => `
            <div class="card">
                <img src="${article.urlToImage || 'default-thumbnail.jpg'}" alt="News Thumbnail" />
                <div class="card-content">
                    <p><a href="${article.url}" target="_blank">${article.title}</a></p>
                </div>
            </div>
        `).join('');

        // Google Scholar Papers (limited to 12)
        const scholarResults = data.scholar.slice(0, 12).map(paper => `
            <div class="card">
                <div class="card-content">
                    <p><a href="${paper.link}" target="_blank">${paper.title}</a></p>
                </div>
            </div>
        `).join('');

        // Set YouTube, News, and Scholar results into their respective grid containers
        youtubeResultsDiv.innerHTML = `<h3>YouTube Videos</h3><div class="results-grid">${youtubeResults}</div>`;
        newsResultsDiv.innerHTML = `<h3>News Articles</h3><div class="results-grid">${newsResults}</div>`;
        scholarResultsDiv.innerHTML = `<h3>Google Scholar Papers</h3><div class="results-grid">${scholarResults}</div>`;
    } catch (error) {
        // Hide loading message
        loadingMessageDiv.innerHTML = '';

        // Display error messages
        youtubeResultsDiv.innerHTML = '<p>Error loading YouTube videos.</p>';
        newsResultsDiv.innerHTML = '<p>Error loading news articles.</p>';
        scholarResultsDiv.innerHTML = '<p>Error loading scholarly papers.</p>';
        console.error('Error fetching data:', error);
    }
});