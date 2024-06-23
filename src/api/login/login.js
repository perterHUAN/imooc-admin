import { request } from "@/utils";
function login(data) {
  return request({
    url: "sys/login",
    method: "post",
    data,
  });
}

export default login;
