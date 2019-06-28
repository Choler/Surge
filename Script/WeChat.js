body = JSON.parse($response.body);
body['advertisement_num'] = 0;
body['advertisement_info'] = [];
result = JSON.stringify(body);
$done({body: result});
