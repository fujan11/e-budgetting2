import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/dataRenstra",
        name: "dataRenstra",
        component: () => import("@/views/Renstra/dataRenstra.vue"),
      },
      {
        path: "/bidangRenstra",
        name: "bidangRenstra",
        component: () => import("@/views/Renstra/bidangRenstra.vue"),
      },
      {
        path: "/detailRenstra",
        name: "detailRenstra",
        component: () => import("@/views/Renstra/detailRenstra.vue"),
      },
      {
        path: "/TahunRenstra",
        name: "TahunRenstra",
        component: () => import("@/views/Renstra/TahunRenstra.vue"),
      },
      {
        path: "/sebaranrenstra",
        name: "sebaranrenstra",
        component: () => import("@/views/Renstra/SebaranRenstra.vue"),
      },
      {
        path: "/detailsebaranrenstra",
        name: "detailsebaranrenstra",
        component: () => import("@/views/Renstra/detailSebaranRenstra.vue"),
      },
      {
        path: "/datarkat",
        name: "datarkat",
        component: () => import("@/views/RKAT/dataRkat.vue"),
      },
      {
        path: "/detailrkat",
        name: "detailrkat",
        component: () => import("@/views/RKAT/DetailRkat.vue"),
      },
      {
        path: "/proker",
        name: "proker",
        component: () => import("@/views/ProgramKerja/programKerja.vue"),
      },
      {
        path: "/pengajuandana",
        name: "pengajuandana",
        component: () => import("@/views/PengajuanDana/pengajuanDana.vue"),
      },
      {
        path: "/elpeje",
        name: "elpeje",
        component: () => import("@/views/PengajuanDana/elpeje.vue"),
      },
      {
        path: "/pagu",
        name: "pagu",
        component: () => import("@/views/pagu/pagu.vue"),
      },

    ],
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/authentication/Error404.vue"),
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/authentication/Error500.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  store.dispatch(Actions.VERIFY_AUTH);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
