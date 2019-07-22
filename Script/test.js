var result = $response.body;
result = result.replace(/watermark=1/g, 'watermark=0');
result = result.replace(/"reviewed":0/g, '"reviewed":1');
result = result.replace(/"allow_download":false/g, '"allow_download":true');
let body = JSON.parse(result);
if (body.aweme_list) {
  body.aweme_list.forEach((item) => {
    delete item.poi_info;
    delete item.sticker_detail;
    delete item.simple_promotions;
    if (item.raw_ad_data) {
      body.aweme_list.splice(body.aweme_list.findIndex(item => item.is_ads === true), 1)
    };
  });
}
$done({body: JSON.stringify(body)});