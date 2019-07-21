let body = JSON.parse($response.body);
if ($request.url.indexOf('user') > 0) {
  body.error_info = "";
  body.error_code = "0";
  body.message = "获取成功!"
  body.content.pass_days = 0;
  body.content.user_vip_state = 2;
  body.content.user_vip_end_date = "2022.01.01";
  body.content.user_vip_end_date_desc = "2022-01-01";
} else {
  body.error_info = "";
  body.error_code = "0";
  body.message = "获取成功"
}
$done({body: JSON.stringify(body)});