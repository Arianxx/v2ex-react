export const phpTimeToJS = phpTimeStamp => {
  return phpTimeStamp * 1000;
};


export const phpTimeToNow = phpTimeStamp => {
  const nowTimeStamp = (new Date).getTime();
  const lastTimeStamp = phpTimeToJS(phpTimeStamp);
  let secondGap = parseInt((nowTimeStamp - lastTimeStamp) / 1000);

  if (secondGap >= 0 && secondGap < 60) {
    return secondGap + '秒前';
  }
  else if (secondGap >= 60 && secondGap < 3600) {
    return parseInt(secondGap / 60) + '分钟前';
  }
  else if (secondGap >= 3600 && secondGap < 3600 * 24) {
    return parseInt(secondGap / 3600) + '小时前';
  }
  else {
    return parseInt(secondGap / 86400) + '天前';
  }
};