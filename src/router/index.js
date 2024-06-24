import { createRouter, createWebHistory } from "vue-router";
import { Login } from "@/views/login";
import { Home } from "@/views/home";
import {
  checkAuthenticated,
  isExistLocalStorage,
  useUserProfile,
} from "@/utils";
import { USER_INFO } from "@/constants";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      component: Home,
    },
  ],
});

router.beforeEach(async (to, from) => {
  console.log("navigate:  to: ", to, " from: ", from);
  if (to.path !== "/login" && !checkAuthenticated()) return { path: "/login" };
  else {
    if (!isExistLocalStorage(USER_INFO)) {
      await useUserProfile();
    }
  }
});

export default router;
