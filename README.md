# Twitter followers

Retreive all Twitter followers regardless of rate limits (may takes long time).
## Dependencies

This package requires [Twit](https://www.npmjs.com/package/twit).

## Usage

```bash
npm install --save twit
npm install --save twitter-followers
```

```js
const Twit = require('twit')
const tokens = {
  consumer_key: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
  consumer_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  access_token: 'xxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  access_token_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  timeout_ms: 60 * 1000
}

const T = new Twit(tokens)
const getFollowers = require('twitter-followers')

getFollowers(T, 'xaqron')
  .then((followers) => {
    console.log(followers)
  })

```