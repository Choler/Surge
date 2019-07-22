var result = $response.body.replace(/watermark=1/g, "watermark=0");
let body = JSON.parse(result);
if (body.aweme_list) {
  body.aweme_list.forEach((item) => {
    delete item.poi_info;
    delete item.sticker_detail;
    delete item.simple_promotions;
    item.status.reviewed = 1;
    item.interaction_stickers = null;
    item.video_control.allow_download = true;
    if (item.raw_ad_data) {
      body.aweme_list.splice(body.aweme_list.findIndex(item => item.is_ads === true), 1)
      $notification.post("Delete ADS", "", "")
    };
  });
}
if (body.data) {
  body.data.forEach((item) => {
    delete item.aweme.simple_promotions;
    item.aweme.status.reviewed = 1;
    item.aweme.interaction_stickers = null;
    item.aweme.video_control.allow_download = true;
  });
}
$done({body: JSON.stringify(body)});