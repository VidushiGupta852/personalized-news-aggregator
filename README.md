# personalized-news-aggregator
# Personalized News Aggregator

## Overview
The Personalized News Aggregator is a web-based application that fetches and displays news articles based on user preferences. It aggregates news from various sources and presents a customized feed to users.

## Features
- Fetches top headlines from a news API.
- Allows users to search for news based on keywords.
- Displays articles dynamically on the webpage.
- Responsive design for optimal viewing on different devices.
- Simple and clean user interface.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **API Integration:** News API (or any other preferred news source)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/news-aggregator.git
   cd news-aggregator
   ```
2. Open `index.html` in a browser to view the application.
3. To enable API integration, obtain an API key from [NewsAPI](https://newsapi.org/) and replace `YOUR_API_KEY` in `script.js`:
   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```

## Usage
1. Open the application in a browser.
2. View the latest headlines on page load.
3. Use the search bar to find articles related to specific topics.
4. Click on any article to read more on the source website.

## File Structure
```
news-aggregator/
│── index.html     # Main HTML file
│── styles.css     # Stylesheet for UI design
│── script.js      # JavaScript for fetching and displaying news
│── README.md      # Project documentation
```

## Future Enhancements
- User authentication for saving preferences.
- Machine learning-based recommendation system.
- Multi-language news support.
- Dark mode UI.

## License
This project is licensed under the MIT License.

## Author
Developed by Vidushi Gupta

