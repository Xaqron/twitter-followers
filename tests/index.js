/*  global describe it */

const Twit = require('twit')
const tokens = {
  consumer_key: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
  consumer_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  access_token: 'xxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  access_token_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  timeout_ms: 60 * 1000
}

describe('Twitter', function () {
  this.timeout(60000)
  it('Get Followers', () => {
    const T = new Twit(tokens)
    const getFollowers = require('../index')
    getFollowers(T, 'xaqron', 5000)
      .then((followers) => {
        console.log(followers)
      })
  })
})
