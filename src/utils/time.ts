export const timeFormater = (contentDuration: number): string => {
  const hours = Math.floor(contentDuration / 3600);
  const minutes = Math.floor((contentDuration % 3600) / 60);
  const seconds = Math.floor(contentDuration % 60);
  return `${hours}:${minutes}:${seconds}`;
};

export const convertMStoTime = (currentTime: number): string => {
  const time = Date.now();
  const timeElapsed = time - currentTime;
  const getAddedTime = Math.round(timeElapsed / 1000);
  const relativeTimeFormat = new Intl.RelativeTimeFormat("en", {
    style: "long",
  });

  if (getAddedTime < 60) {
    return relativeTimeFormat.format(-getAddedTime, "seconds");
  }
  if (getAddedTime >= 60 && getAddedTime < 3600) {
    return relativeTimeFormat.format(Math.round(-getAddedTime / 60), "minutes");
  }

  if (getAddedTime >= 3600 && getAddedTime < 86400) {
    return relativeTimeFormat.format(Math.round(-getAddedTime / 3600), "hours");
  }

  if (getAddedTime >= 86400) {
    return relativeTimeFormat.format(Math.round(-getAddedTime / 86400), "days");
  }

  return "It's been a while";
};
