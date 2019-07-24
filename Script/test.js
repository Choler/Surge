var result = $response.body;
result = result.replace(/watermark=1/g, 'watermark=0');
result = result.replace(/"reviewed":0/g, '"reviewed":1');
result = result.replace(/"allow_download":false/g, '"allow_download":true');
let body = JSON.parse(result);
if (body.aweme_list) {
  body.aweme_list.forEach((element, index) => {
    if (element.poi_info) {
      delete body.aweme_list[index].poi_info;
    }
    if (element.sticker_detail) {
      delete body.aweme_list[index].sticker_detail;
    }
    if (element.simple_promotions) {
      delete body.aweme_list[index].simple_promotions;
    }
    if (element.is_ads !== false) {
      body.aweme_list.splice(index, 1);
    }
    if (element.interaction_stickers !== null) {
      body.aweme_list[index].interaction_stickers = null;
    }
  });
}
$done({body: JSON.stringify(body)});