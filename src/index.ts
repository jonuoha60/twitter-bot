import dotenv from "dotenv";
import axios from "axios";
import Twitter from "twitter";

dotenv.config();

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY as string,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string,
});

const GITHUB_API = "https://api.github.com/users/jonuoha60/repos?sort=created&direction=desc";

async function grabGithubData(): Promise<string> {
  const res = await axios.get(GITHUB_API);
  const repos = res.data;

  if (!repos || repos.length === 0) {
    throw new Error("No repositories found.");
  }

  const latestRepo = repos[0];
  return `Latest Repo: ${latestRepo.name} - ${latestRepo.html_url}`;
}

async function main() {
  const githubData = await grabGithubData();

  const params = {
    description: githubData, 
  };

  await client.post("account/update_profile", params);
  console.log("✅ Bio updated successfully with:", githubData);
}

main().catch((err) => console.error("❌ Error:", err.message));
