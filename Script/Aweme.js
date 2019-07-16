function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
var result = $response.body;
var keyword1 = ['watermark=1'];
var keyword2 = ['"reviewed":0'];
var keyword3 = ['"allow_download":false'];
keyword1.forEach(function(k) {
  result = replaceAll(result, k, 'watermark=0');
});
keyword2.forEach(function(k) {
  result = replaceAll(result, k, '"reviewed":1');
});
keyword3.forEach(function(k) {
  result = replaceAll(result, k, '"allow_download":true');
});
let body = JSON.parse(result);
if (body.aweme_list) {
  body.aweme_list.forEach((element, index) => {
    if (element.hasOwnProperty('raw_ad_data')) {
      body.aweme_list.splice(index, 1);
    }
  });
  body.aweme_list.forEach((element, index) => {
    if (element.hasOwnProperty('simple_promotions')) {
      delete body.aweme_list[index].simple_promotions;
    }
  });
  body.aweme_list.forEach((element, index) => {
    if (element['interaction_stickers'] !== null) {
      body.aweme_list[index].interaction_stickers = null;
    }
  });
}
if (body.data) {
  body.data.forEach((element, index) => {
    if (element.aweme.hasOwnProperty('simple_promotions')) {
      delete body.data[index].aweme.simple_promotions;
    }
  });
  body.data.forEach((element, index) => {
    if (element.aweme['interaction_stickers'] !== null) {
      body.data[index].aweme.interaction_stickers = null;
    }
  });
}
$done({body: JSON.stringify(body)});
