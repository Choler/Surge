let body = JSON.parse($response.body);
if ($request.url.indexOf('user') > 0) {
  body.content.user_vip_end_date = "2022.01.01";
  body.content.user_vip_end_date_desc = "2022-01-01";
  $done({body: JSON.stringify(body)});
} else {
  body.content = [];
  $done({body: JSON.stringify(body)});
}
