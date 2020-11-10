import { TwitterClient, Search, SearchParams } from 'twitter-api-client';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const Twitter = new TwitterClient({
  apiKey: process.env.CONSUMER_KEY!,
  apiSecret: process.env.CONSUMER_SECRET!,
  accessToken: process.env.ACCESS_TOKEN!,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET!,
});

const darkmemelordSearch: SearchParams = {
  q: '#darkmemelord',
  count: 5,
  result_type: 'recent',
};

const engageLatest = async (): Promise<void> => {
  try {
    const data: Search = await Twitter.tweets.search(darkmemelordSearch);
    data.statuses.forEach(async tweet => {
      try {
        await Twitter.tweets.favoritesCreate({ id: tweet.id_str });
      }
      catch (error) {
        console.error(`There was an error favoriting tweet ${tweet.id_str}`, error);
      }
      try {
        await Twitter.tweets.statusesRetweetById({ id: tweet.id_str });
      }
      catch (error) {
        console.error(`There was an error retweeting tweet ${tweet.id_str}`, error);
      }
    });
  }
  catch (error) {
    console.error('There was an error retrieving tweets', error);
  }
};

engageLatest();
setInterval(engageLatest, 1000 * 60 * 60 * 1); // Runs every 1 hour
