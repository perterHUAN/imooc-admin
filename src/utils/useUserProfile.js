import { request, setLocalStorage } from "@/utils";
import { USER_INFO } from "@/constants/index.js";
import { ElMessage } from "element-plus";
async function useUserProfile() {
  const response = await request({
    url: "sys/profile",
  });

  if (response.data.success) {
    setLocalStorage(USER_INFO, JSON.stringify(response.data.data));
  } else {
    ElMessage({
      message: "获取用户数据失败",
      type: "error",
      duration: 2000,
    });
  }
  console.log("response data for getting user profile: ", response);
}

export default useUserProfile;
