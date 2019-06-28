if ($request.url.indexOf('watermark') > 0) {
  result = $request.url.replace(/&watermark=\d/, "")
  $done({url: result});
} else {
  $done();
}
if ($request.url.indexOf('vide.f7') > 0) {
  result = $request.url.replace(/vide\.f7/, "vide.f")
  $done({url: result});
} else {
  $done();
}