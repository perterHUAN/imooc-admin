<script setup>
import { ref } from "vue";
import { UserFilled, Lock } from "@element-plus/icons-vue";
import { validatePassword, validateUserName, useLogin } from "@/utils";
import { useLoadingStore } from "@/stores/loading.js";
const loadingStore = useLoadingStore();

const loginForm = ref({
  username: "super-admin",
  password: "123456",
});
const loginFormRef = ref();

const loginFormRules = {
  username: {
    trigger: "blur",
    validator: validateUserName,
  },
  password: {
    trigger: "blur",
    validator: validatePassword,
  },
};

function handleLogin(formInstance) {
  if (!formInstance) return;
  formInstance.validate((valid) => {
    if (valid) {
      console.log("valid success");
      useLogin({
        username: loginForm.value.username,
        password: loginForm.value.password,
      });
    } else {
      console.log("valid fail");
    }
  });
}
</script>
<template>
  <div
    class="h-screen flex flex-row justify-center bg-[#2a3a4d]"
    v-loading="loadingStore.loading"
  >
    <div class="flex flex-col gap-2 mt-40">
      <h2 class="text-center text-white mb-4 font-bold text-lg">用户登录</h2>
      <el-form
        class="w-80"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <el-form-item prop="username">
          <el-input
            type="text"
            placeholder="请输入用户名"
            v-model="loginForm.username"
            style="
              --el-input-bg-color: #263445;
              --el-input-text-color: white;
              --el-input-icon-color: white;
            "
            clearable
            :prefix-icon="UserFilled"
          ></el-input>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
            style="
              --el-input-bg-color: #263445;
              --el-input-text-color: white;
              --el-input-icon-color: white;
            "
            show-password
            :prefix-icon="Lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="w-full"
            type="primary"
            @click="handleLogin(loginFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped></style>
