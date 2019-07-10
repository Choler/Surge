let body = JSON.parse($response.body);
if (body.data) {
  body.data.data.forEach((element, index) => {
    if (element["ad_info"] !== null) {
      body.data.data.splice(index, 1);
    }
  })
}
$done({body: JSON.stringify(body)})
