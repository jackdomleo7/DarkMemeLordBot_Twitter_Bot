import Twit, { Response } from 'twit';

const Twitter = new Twit(require('./config'));

const darkmemelordSearch: Twit.Params = {
  q: '#darkmemelord',
  count: 20,
  result_type: 'recent',
};

const engageLatest = (): void => {
  Twitter.get('search/tweets', darkmemelordSearch, (error: Error, data: any) => {
    if (!error) {
      for (let i: number = 0; i <= data.statuses.length - 1; i++) {
        const tweetId: string = data.statuses[i].id_str;
        Twitter.post(`statuses/retweet/${tweetId}`, {}, (error: Error, response: Response) => { // Retweet
          if (response) {
            console.log(`Success! Retweeted: ${tweetId}`);
          }
          if (error) {
            console.error('There was an error with Twitter:', error);
          }
        });
      }
    } else {
      console.error('There was an error with your hashtag search:', error);
    }
  });
};

engageLatest();
setInterval(engageLatest, 1000 * 60 * 60 * 1); // Runs every 1 hour
