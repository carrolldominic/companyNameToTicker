# companyNameToTicker

This module provides a simple way to search for stock ticker symbols by company name using a local JSON file of company tickers sourced from the U.S. Securities and Exchange Commission (SEC). Tried searching for someone else's quick solution for this but was shocked it didn't really appear to exist aside from a few APIs based on different data.

## Features
- Search for a ticker symbol by partial or full company name (case-insensitive)
- Returns the first matching ticker symbol or `null` if no match is found

## Usage

### 1. Install dependencies
This module uses Node.js built-in modules (`fs`, `path`). No external dependencies are required.

### 2. Prepare the data file
Download the latest company tickers JSON file from the SEC:
- [SEC Company Tickers JSON](https://www.sec.gov/file/company-tickers)

Save the file as `company_tickers.json` in the same directory as `tickerSearch.js`.

### 3. Import and use the module
```javascript
const { searchTicker } = require('./tickerSearch');

(async () => {
  const ticker = await searchTicker('Apple Inc');
  console.log(ticker); // Example output: 'AAPL'
})();
```

- The function `searchTicker(companyName)` returns a Promise that resolves to the ticker symbol (string) or `null` if not found.

## How it works
- The module loads `company_tickers.json` and searches for the company name (case-insensitive).
- If no exact match is found, it tries matching the first one or two words of the input.

## Data Source
The company tickers data is provided by the U.S. Securities and Exchange Commission (SEC):
- [SEC Company Tickers](https://www.sec.gov/file/company-tickers)

## License
This project is provided as-is for educational and informational purposes. Please refer to the SEC website for data usage terms. This is not investment advice!!!
