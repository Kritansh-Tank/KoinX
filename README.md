# KoinX - Frontend Intern Assignment

This project implements the frontend design and functionality as specified in the Figma design for the KoinX application. The goal was to build a cryptocurrency dashboard that displays the price, price change, chart, and trending coins information for Bitcoin (BTC) and other cryptocurrencies using data fetched from the CoinGecko API.

## Features

### Mandatory Tasks (Fully Implemented)

1. Component Implementation: All components from the Figma design have been successfully implemented as React.js components, ensuring full functionality and responsiveness across devices.
2. Bitcoin Price Data: The project fetches the price of Bitcoin (BTC) in both USD and INR using the CoinGecko /simple/price API. The data includes:
    1. Current price in USD and INR
    2. 24-hour price change percentage
3. Bitcoin Chart: Instead of building the chart from scratch, the TradingView Widget is embedded to show the BTC/USD chart, with customization to match the Figma design.
4. Trending Coins (24h): The top 3 trending coins are fetched using the CoinGecko /search/trending API and displayed in the "Trending Coins (24h)" component.
5. You May Also Like: A horizontally scrollable carousel is implemented to display the logo, symbol, price, 24h price change, and a sparkline graph for the trending coins. The data for the "You May Also Like" section is fetched using the trending coins API.
6. Responsive Design: The app is fully responsive and matches the design specifications from the Figma file.
7. Placeholder Content: Static text and image placeholders are used for components not dependent on external APIs.

### Optional Tasks (Not Implemented)

While the optional tasks were not implemented in this version of the project, the mandatory tasks were thoroughly executed to ensure the core functionality and design were met. The optional task of making the token dynamic via the URL and additional features can be explored in future improvements.

## Deployment

The project is deployed on [Vercel](https://koin-x-blush.vercel.app/) for live access. You can visit the deployed version at:

## Tech Stack

1. Next.js
2. Tailwind CSS for styling
3. CoinGecko API for fetching cryptocurrency data
4. TradingView Widget for displaying cryptocurrency charts
5. React Router for dynamic routes
6. Vercel for deployment

## API Integration

### CoinGecko /simple/price API

1. Endpoint: /simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true
2. Response: Price of Bitcoin in USD, INR, and the 24-hour change percentage.

### CoinGecko /search/trending API

1. Endpoint: /search/trending
2. Response: List of top 3 trending coins.

## TradingView Widget

The TradingView chart widget is embedded for displaying the BTC/USD chart.

## Screenshots

![KoinX - Frontend Intern Assignment](https://drive.google.com/uc?id=12bwVyOK4Fo3uNiBpxmpqBIQSRAmN78Vi)
