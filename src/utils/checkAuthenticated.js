import { isExistLocalStorage } from "@/utils";
import { AUTHENTICATE_TOKEN_NAME } from "@/constants/index.js";

function checkAuthenticated() {
  return isExistLocalStorage(AUTHENTICATE_TOKEN_NAME);
}

export default checkAuthenticated;
