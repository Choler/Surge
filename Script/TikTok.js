var obj = JSON.parse($response.body);
if (obj.aweme_list) {
  for (var i = obj.aweme_list.length -1; i >= 0 ; i--) {
    var arr = obj.aweme_list[i].video;
    arr.download_addr = arr.play_addr;
  }
}
$done({body: JSON.stringify(obj)});