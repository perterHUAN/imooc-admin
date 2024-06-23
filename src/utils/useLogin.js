import { login } from "@/api/login/index.js";
import { ElMessage } from "element-plus";
import { useLoadingStore } from "@/stores/loading.js";
import router from "@/router";
import { md5 } from "js-md5";
import { setLocalStorage } from "@/utils";
import { AUTHENTICATE_TOKEN_NAME } from "@/constants";

async function useLogin({ username, password }) {
  const store = useLoadingStore();
  store.startLoading();
  try {
    const response = await login({
      username,
      password: md5(password),
    });
    if (response.data.success) {
      ElMessage({ message: "登录成功", type: "success", duration: 2000 });
      setLocalStorage(AUTHENTICATE_TOKEN_NAME, response.data.token);
      router.push("/");
    } else {
      ElMessage({
        message: response.data.message,
        type: "error",
        duration: 2000,
      });
    }
  } catch (error) {
    ElMessage({
      message: `出现错误, ${error.message}`,
      type: "error",
      duration: 2000,
    });
  }
  store.endLoading();
}
export default useLogin;
