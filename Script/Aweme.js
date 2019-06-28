body = JSON.parse($response.body);
if(body.aweme_list){
  body.aweme_list.forEach((element, index)=>{
    if(element.hasOwnProperty('raw_ad_data')){      
      body.aweme_list.splice(index, 1);
    }
  });
  body.aweme_list.forEach((element, index)=>{
    if(element.hasOwnProperty('simple_promotions')){      
      delete body.aweme_list[index].simple_promotions;
    }
  });
  body.aweme_list.forEach((element, index) => {
    if (element['interaction_stickers'] !== null) {
      body.aweme_list[index].interaction_stickers = null;
    }
  });
  body.aweme_list.forEach((element, index) => {
    if (element['prevent_download'] === true) {
      body.aweme_list[index].status.reviewed = 1;
      body.aweme_list[index].prevent_download = false;
    }
  });
}
result = JSON.stringify(body);
$done({body: result});
