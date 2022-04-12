export const timeFormater = (contentDuration: number): string => {
  const hours = Math.floor(contentDuration / 3600);
  const minutes = Math.floor((contentDuration % 3600) / 60);
  const seconds = Math.floor(contentDuration % 60);
  return `${hours}:${minutes}:${seconds}`;
};

export const convertMSInSeconds = (currentTime: number): string => {
  let timeElapsed;
  const time = Date.now();

  timeElapsed = time - currentTime;

  const getAddedTime = Math.round(timeElapsed / 1000);

  if (getAddedTime < 60) {
    return "added less than 1 minute ago";
  }
  if (getAddedTime >= 60 && getAddedTime < 3600) {
    return `added ${Math.round(getAddedTime / 60)} minutes ago`;
  }
  if (getAddedTime >= 3600 && getAddedTime < 86400) {
    return `added ${Math.round(getAddedTime / 3600)} hours ago`;
  }
  if (getAddedTime >= 86400 && getAddedTime < 604800) {
    return `added ${Math.round(getAddedTime / 86400)} days ago`;
  }
  return "It's been a while";
};
