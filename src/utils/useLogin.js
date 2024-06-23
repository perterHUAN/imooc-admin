import { login } from "@/api/login/index.js";
import { ElMessage } from "element-plus";
import { useLoadingStore } from "@/stores/loading.js";
import { md5 } from "js-md5";

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
