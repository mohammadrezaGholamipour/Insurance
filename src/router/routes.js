const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage.vue") },
      {
        path: "news",
        component: () => import("src/pages/NewsPage.vue"),
      },
      {
        path: "insurance",
        component: () => import("src/pages/InsurancePage.vue"),
      },
      {
        path: "contact",
        component: () => import("src/pages/ContactPage.vue"),
      },
      {
        path: "about",
        component: () => import("src/pages/AboutPage.vue"),
      },
      {
        path: "signin",
        component: () => import("src/pages/SignInPage.vue"),
      },
      {
        path: "signup",
        component: () => import("src/pages/SignUpPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
