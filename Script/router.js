if ($network.v4.primaryInterface === 'en0') {
  $done({address: $network.v4.primaryRouter})
} else {
  $done()
} 