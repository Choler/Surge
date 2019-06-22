function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

var keyword = ['watermark=1'];

var result = $response.body;

keyword.forEach(function(k) {
  result = replaceAll(result, k, 'watermark=0');
});

body = JSON.parse(result);
body['aweme_list'].forEach((element, index) => {
  if (element.is_ads === true) {
    body['aweme_list'].splice(index, 1);
  }
});
body['aweme_list'].forEach((element, index) => {
  if (element.simple_promotions) {
    delete body['aweme_list'][index].simple_promotions;
  }
});
body['aweme_list'].forEach((element, index) => {
  if (element.prevent_download === true) {
    body['aweme_list'][index].status.reviewed = 1;
    body['aweme_list'][index].prevent_download = false;
  }
});
body = JSON.stringify(body)

$done({body})