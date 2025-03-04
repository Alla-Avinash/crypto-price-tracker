---
id: crypto-tracker
title: Crypto Price Tracker Documentation
---

# Crypto Price Tracker Documentation

## Project Setup Guide
### Web App (Next.js)
1. Install dependencies:
   ```sh
   cd web-app
   npm install
   ```
2. Run the development server:
   ```sh
   npm run dev
   ```

### Documentation (Docusaurus)
1. Install dependencies:
   ```sh
   cd docs
   npm install
   ```
2. Start the Docusaurus server:
   ```sh
   npm run start
   ```

---

## API Integration
- The app fetches live crypto prices from **CoinGecko API**:
  ```sh
  GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false
  ```
- The fetched data includes:
  - Cryptocurrency name
  - Current price
  - Market cap ranking

---

## State Management
- **React Query** is used to manage API state because:
  - It handles caching and re-fetching efficiently.
  - Provides loading and error states automatically.
  - Improves performance by reducing unnecessary API calls.

---

## Challenges & Solutions
### Challenge 1: Handling API Rate Limits
- **Issue:** CoinGecko API has rate limits, leading to failed requests.
- **Solution:** Implemented error handling and retry logic in React Query.

### Challenge 2: UI Responsiveness
- **Issue:** Ensuring a smooth experience across devices.
- **Solution:** Used a simple and responsive design with flexible styling.

---

This documentation explains the project setup, API integration, state management, and challenges faced during development.
