function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

var keyword = ['watermark=1'];

var result = body;

keyword.forEach(function(k) {
  result = replaceAll(result, k, 'watermark=0');
});

var obj = JSON.parse(result);

obj.aweme_list.forEach((element, index) => {
  if (element.simple_promotions) {
    delete obj.aweme_list[index].simple_promotions;
  }
});

obj.aweme_list.forEach((element, index) => {
  if (element.interaction_stickers !== null) {
    obj.aweme_list[index].interaction_stickers = null;
  }
});

obj.aweme_list.forEach((element, index) => {
  if (element.prevent_download === true) {
    obj.aweme_list[index].prevent_download = false;
    obj.aweme_list[index].status.reviewed = 1;
  }
});

obj.aweme_list.forEach((element, index) => {
  if (element.is_ads === true) {
    obj.aweme_list.splice(index, 1);
  }
});

JSON.stringify(obj);