export const dateFormater = (uploadDate: string): string => {
  const date = new Date(uploadDate);

  const milliseconds = date.getTime();
  const dateInMS = new Date(milliseconds);

  return dateInMS.toLocaleString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}