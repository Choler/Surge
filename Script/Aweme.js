function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

var keyword = ['watermark=1'];

var result = $response.body;

keyword.forEach(function(k) {
  result = replaceAll(result, k, 'watermark=0');
});

var obj = JSON.parse(result);

obj.aweme_list.forEach((element, index) => {
  if (element.is_ads === true) {
    obj.aweme_list.splice(index, 1);
  }
});

body = JSON.stringify(obj);

$done({body});