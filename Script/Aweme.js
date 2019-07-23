var result = $response.body.replace(/watermark=1/g, "watermark=0");
let body = JSON.parse(result);
if (body.aweme_list) {
  body.aweme_list.forEach((element, index) => {
    if (element.poi_info) {
      delete body.aweme_list[index].poi_info;
    };
    if (element.sticker_detail) {
      delete body.aweme_list[index].sticker_detail;
    };
    if (element.simple_promotions) {
      delete body.aweme_list[index].simple_promotions;
    };
    if (element.is_ads !== false) {
      body.aweme_list.splice(index, 1)
    };
    if (element.status.reviewed !== 1) {
      body.aweme_list[index].status.reviewed = 1;
    };
    if (element.interaction_stickers !== null) {
      body.aweme_list[index].interaction_stickers = null;
    };
    if (element.video_control.allow_download !== true) {
      body.aweme_list[index].video_control.allow_download = true;
    };
  });
}
if (body.data) {
  body.data.forEach((element, index) => {
    if (element.aweme.simple_promotions) {
      delete body.data[index].aweme.simple_promotions;
    };
    if (element.aweme.status.reviewed !== 1) {
      body.data[index].aweme.status.reviewed = 1;
    };
    if (element.aweme.interaction_stickers !== null) {
      body.data[index].aweme.interaction_stickers = null;
    };
    if (element.aweme.video_control.allow_download !== true) {
      body.data[index].aweme.video_control.allow_download = true;
    }
  });
}
$done({body: JSON.stringify(body)});