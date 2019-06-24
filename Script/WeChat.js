body = JSON.parse($response.body);
body.advertisement_info = [];
body = JSON.stringify(body);
$done({body});