const apiKey = '95c9db8869534f048b2e7d3534c173f4'; // Replace with actual API key
const searchBar = document.getElementById('search-bar');
const newsSection = document.getElementById('news-section');

// Fetch news based on user input or preferences
searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchBar.value.trim() !== '') { // Check if input is not empty
        fetchNews(searchBar.value.trim());
    }
});

function fetchNews(query) {
    // Show a loading message while fetching data
    newsSection.innerHTML = '<p>Loading news...</p>';

    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.articles.length > 0) {
                displayNews(data.articles);
            } else {
                newsSection.innerHTML = `<p>No news articles found for "${query}".</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            newsSection.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
        });
}

function displayNews(articles) {
    newsSection.innerHTML = ''; // Clear the section

    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('news-card');

        // Handle cases where `urlToImage` is null
        const imageUrl = article.urlToImage ? article.urlToImage : 'default-image.jpg'; // Fallback image
        const title = article.title ? article.title : 'No Title Available';
        const description = article.description ? article.description : 'No Description Available';
        const url = article.url ? article.url : '#';

        articleCard.innerHTML = `
            <img src="${imageUrl}" alt="News Image">
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${url}" target="_blank">Read More</a>
        `;

        newsSection.appendChild(articleCard);
    });
}

