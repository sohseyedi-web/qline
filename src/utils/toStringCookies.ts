interface Cookies {
  getAll: () => { name: string; value: string }[];
}

export const toStringCookies = (cookies: Cookies): string => {
  let strCookie = "";
  cookies
    .getAll()
    .forEach((item) => (strCookie += `${item?.name}=${item?.value}; `));
  return strCookie;
};
