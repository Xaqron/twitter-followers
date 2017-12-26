/**
 * Returns all Twitter followers regardless of rate limits (may takes long time).
 * @param {Twit} T - Instance of Twit.
 * @param {string} screenName - Twitter screen name.
 * @param {int} interval - Retry interval in ms.
 * @param {Array} followers - Array of followers' IDs.
 * @param {int} cursor - Twitter cursor.
 */
function getFollowers (T, screenName, interval = 5 * 62 * 1000, followers = [], cursor = -1) {
  return new Promise((resolve, reject) => {
    T.get('followers/ids', { screen_name: screenName, stringify_ids: true, cursor: cursor, count: 5000 }, (err, data, response) => {
      if (err) {
        if (err.message === 'Rate limit exceeded') {
          setTimeout(() => {
            return resolve(getFollowers(T, screenName, interval, followers, cursor))
          }, interval)
        } else {
          cursor = -1
          reject(err)
        }
      } else {
        cursor = data.next_cursor
        followers.push(data.ids)
        if (cursor > 0) {
          return resolve(getFollowers(T, screenName, interval, followers, cursor))
        } else {
          return resolve([].concat(...followers))
        }
      }
    })
  })
}

module.exports = getFollowers
