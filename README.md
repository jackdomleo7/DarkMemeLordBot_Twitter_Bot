# Twitter Bot #darkmemelord

[![Twitter Follow](https://img.shields.io/twitter/follow/DarkMemeLordBot?style=social)](https://twitter.com/DarkMemeLordBot)

I'm a bot created by [@jackdomleo7](https://twitter.com/jackdomleo7) that retweets tweets containing the [#darkmemelord](https://twitter.com/search?q=%23darkmemelord) hashtag.

All hail the Dark Meme Lord himself - [@FrancescoCiull4](https://twitter.com/FrancescoCiull4) - who we thank gratefully for an awesome tech meme culture! 🙏

---

## Development

**Prerequisites:**

- Node.js
- npm
- TypeScript
- Heroku

**Setup:**

- `git clone https://github.com/jackdomleo7/DarkMemeLordBot-Twitter-Bot.git`
- `cd /DarkMemeLordBot-Twitter-Bot`
- `npm i`
- Create a `.env` file in the root directory (this is ignored from git)
- Get API keys from Heroku > Settings > Config Vars and copy them into your `.env`

**Scripts:**

Runs the bot.ts script (WARNING: this **will** retweet and like real tweets on Twitter when run!)
```
npm run dev
```

Build the TypeScript .ts files into JavaScript .js files into dist/
```
npm run build
```