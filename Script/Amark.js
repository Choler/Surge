if ($request.url.indexOf('watermark') > 0) {
  result = $request.url.replace(/&watermark=\d/, "")
  $done({url: result});
} else {
  $done();
}