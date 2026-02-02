import Cookies from "js-cookie";

export const getToken = () => {
  const token = Cookies.get("look_alike_admin_token");
  return token;
};
