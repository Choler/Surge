let result = $response.body;
if ($request.url.indexOf('getTopFeed') != -1) {
  body = JSON.parse(result);
  delete body.data.notice;
  body.data.indexView.interestingList.splice(3, 1);
  body = JSON.stringify(body);
  $done({body});
}

if ($request.url.indexOf('channel') != -1) {
  body = JSON.parse(result);
  body.data.sections.forEach((element, index) => {
    if (element['sectionType'] === "AD") {
      body.data.sections.splice(index, 1);
    }
  });
  body = JSON.stringify(body);
  $done({body});
}

if ($request.url.indexOf('todayChoice') != -1) {
  body = JSON.parse(result);
  delete body.data.notice;
  body.data.sections.splice(-1, 1);
  body.data.sections.forEach((element, index) => {
    if (element['sectionType'] === "AD") {
      body.data.sections.splice(index, 1);
    }
  });
  body = JSON.stringify(body);
  $done({body});
}