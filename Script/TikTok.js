var obj = JSON.parse($response.body);
if (obj.aweme_list) {
  for (var i = obj.aweme_list.length -1; i >= 0 ; i--) {
    var play = obj.aweme_list[i].video.play_addr;
    var download = obj.aweme_list[i].video.download_addr;
    download.url_list[0] = play.url_list[0];
    download.url_list[1] = play.url_list[1];
  }
}
$done({body: JSON.stringify(obj)});