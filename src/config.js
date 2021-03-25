export default {
  accountId: 'FRANUATH', // <-- find this from BoxCast Support
  channelId: '0sQPtletSML5kwVzKobh', // <-- find this on your boxcast.tv global account page
  channelFilter: (c) => {
    ['bhfcflhlnm1vdejaktgs', 'mmxbmquk0ronyfucfk9w'].indexOf(c.id)
    
    return true  // <-- can use this to exclude certain channels from left nav
  }
}
