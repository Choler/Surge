var result = $response.body.replace(/watermark=1/g, "watermark=0");
let body = JSON.parse(result);
if (body.aweme_list) {
  body.aweme_list.forEach(item => {
    delete item.poi_info;
    delete item.sticker_detail;
    delete item.simple_promotions;
    item.status.reviewed = 1;
    item.interaction_stickers = null;
    item.video_control.allow_download = true;
    if (item.is_ads === true) {
      body.aweme_list.splice(body.aweme_list.findIndex(item => item.raw_ad_data), 1);
    }
  });
}
if (body.data) {
  body.data.forEach((element, index) => {
    if (element.aweme.simple_promotions) {
      delete body.data[index].aweme.simple_promotions;
    }
    if (element.aweme.status.reviewed !== 1) {
      body.data[index].aweme.status.reviewed === 1;
    }
    if (element.aweme.status.reviewed !== null) {
      body.data[index].aweme.interaction_stickers === null;
    }
    if (element.aweme.video_control.allow_download !== true) {
      body.data[index].aweme.video_control.allow_download === true;
    }
  });
}
$done({body: JSON.stringify(body)});