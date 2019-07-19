var result = $response.body.replace(/watermark=1/g, "watermark=0");
let body = JSON.parse(result);
if (body.aweme_list) {
  body.aweme_list.forEach((item) => {
    item.status.reviewed = 1;
    item.interaction_stickers = null;
    item.video_control.allow_download = true;
  });
  body.aweme_list.forEach((element, index) => {
    if (element.hasOwnProperty('raw_ad_data')) {
      body.aweme_list.splice(index, 1);
    }
    if (element.hasOwnProperty('simple_promotions')) {
      delete body.aweme_list[index].simple_promotions;
    }
    if (element.hasOwnProperty('poi_info')) {
      delete body.aweme_list[index].poi_info;
    }
  });
}
if (body.data) {
  body.data.forEach((item) => {
    item.aweme.status.reviewed = 1;
    item.aweme.interaction_stickers = null;
    item.aweme.video_control.allow_download = true;
  });
  body.data.forEach((element, index) => {
    if (element.aweme.hasOwnProperty('simple_promotions')) {
      delete body.data[index].aweme.simple_promotions;
    }
  });
}
$done({body: JSON.stringify(body)});