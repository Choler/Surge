try {
  let obj = JSON.parse($response.body);
  if (obj.data) obj.data = filter_post(obj.data);
  if (obj.aweme_list) obj.aweme_list = filter_feed(obj.aweme_list);
  $done({ body: JSON.stringify(obj) });
} catch (error) {
   console.log("脚本处理时遇到些问题，响应不做修改\n" + error);
   $done({});
}

function filter_post(post) {
  for (var i = post.length - 1; i >= 0; i--) {
    if (post[i].aweme_info) {
      if (post[i].aweme_info.is_ads === true) {
        post.splice(i, 1);
      } else {
        post[i].aweme_info.status.reviewed = 1;
        post[i].aweme_info.video_control.prevent_download_type = 0;
        post[i].aweme_info.video_control.allow_download = true;
        delete post[i].aweme_info.video.misc_download_addrs;
        let play = post[i].aweme_info.video.play_addr.url_list;
        post[i].aweme_info.video.download_addr.url_list = play;
        let download = post[i].aweme_info.video.download_addr;
        post[i].aweme_info.video.download_suffix_logo_addr = download;
      }
    }
    if (post[i].aweme) {
      post[i].aweme.video_control.allow_download = true;
      post[i].aweme.video_control.prevent_download_type = 0;
      post[i].aweme.status.reviewed = 1;
      delete post[i].aweme.video.misc_download_addrs;
      let play = post[i].aweme.video.play_addr.url_list;
      post[i].aweme.video.download_addr.url_list = play;
      let download = post[i].aweme.video.download_addr;
      post[i].aweme.video.download_suffix_logo_addr = download;
    }
  }
  return post;
}

function filter_feed(feed) {
  for (var i = feed.length - 1; i >= 0; i--) {
    if (feed[i].video) {
      if (feed[i].is_ads === true) {
        feed.splice(i, 1);
      } else {
        feed[i].video_control.allow_download = true;
        feed[i].video_control.prevent_download_type = 0;
        feed[i].status.reviewed = 1;
        delete feed[i].video.misc_download_addrs;
        let play = feed[i].video.play_addr.url_list;
        feed[i].video.download_addr.url_list = play;
        let download = feed[i].video.download_addr;
        feed[i].video.download_suffix_logo_addr = download;
      }
    } else {
      feed.splice(i, 1);
    }
  }
  return feed;
}