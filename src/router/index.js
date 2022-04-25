import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Gallery from "../views/Gallery.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
