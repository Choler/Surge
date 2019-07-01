body = JSON.parse($response.body);
body['advertisement_num'] = 0;
body['advertisement_info'] = [];
$done({body: JSON.stringify(body)});