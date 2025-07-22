# Auto Twitter Bio Updater with Latest GitHub Repo

Automatically update your Twitter bio with your newest GitHub repository!  
Keep your Twitter profile fresh and showcase your latest work without any manual effort.

---

## Features

- Fetches your latest GitHub repository using the GitHub API  
- Updates your Twitter bio with the repository name and URL  
- Runs on a Node.js server with Puppeteer and Twitter API integration  
- Easy to configure with environment variables  
- Perfect for developers who want to keep their social profiles in sync effortlessly

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)  
- Twitter Developer account with API keys and access tokens  
- GitHub username  

## Installation

### 1. Clone this repository:

git clone https://github.com/yourusername/auto-twitter-bio-updater.git
cd auto-twitter-bio-updater
Install dependencies:


npm install
Create a .env file in the root directory and add your keys:

TWITTER_CONSUMER_KEY=your_consumer_key
TWITTER_CONSUMER_SECRET=your_consumer_secret
TWITTER_ACCESS_TOKEN_KEY=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret
GITHUB_USERNAME=your_github_username
Update the code or environment variables to point to your GitHub username.

### 2. Usage
Start the app:

npm run dev
