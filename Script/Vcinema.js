let body = JSON.parse($response.body);
if ($request.url.indexOf('splash') > 0 ||$request.url.indexOf('activities') > 0) {
  body.content = [];
  $done({body: JSON.stringify(body)})
} else {
  delete body.content.user_modal_list;
  body.content.pass_days = "-38"
  body.content.user_vip_end_date = "2019.08.19"
  body.content.user_vip_end_date_desc = "2019-08-19"
  $done({body: JSON.stringify(body)})
}
