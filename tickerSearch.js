const fs = require('fs');
const path = require('path');

/**
 * Searches company_tickers.json for a ticker by partial company name (case-insensitive)
 * @param {string} companyName - The input company name
 * @returns {Promise<string|null>} - First matching ticker symbol or null
 */
async function searchTicker(companyName) {
  const filePath = path.join(__dirname, 'company_tickers.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContent);
  const nameLower = companyName.toLowerCase();
  // First, try full input
  for (const key in data) {
    const entry = data[key];
    if (entry.title && entry.title.toLowerCase().includes(nameLower)) {
      return entry.ticker;
    }
  }
  // If not found, try first 1-2 words
  const words = companyName.split(' ').filter(Boolean);
  if (words.length > 0) {
    const shortName = words.slice(0, 2).join(' ').toLowerCase();
    for (const key in data) {
      const entry = data[key];
      if (entry.title && entry.title.toLowerCase().includes(shortName)) {
        return entry.ticker;
      }
    }
  }
  return null;
}

module.exports = { searchTicker };