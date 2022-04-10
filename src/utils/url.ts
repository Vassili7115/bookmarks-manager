export const bookmarkUrlValidation = (url: string): boolean => {
  const regex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gi;
  return regex.test(url);
}


