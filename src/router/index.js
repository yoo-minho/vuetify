import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/authentication",
    component: () =>
      import(
        /* webpackChunkName: "views-authentication-index" */ "@/layouts/authentication/index"
      ),
    children: [
      {
        path: "sign-in",
        name: "SignIn",
        component: () =>
          import(
            /* webpackChunkName: "views-sign-in" */ "@/views/authentication/SignIn"
          )
      },
      {
        path: "sign-up",
        name: "SignUp",
        component: () =>
          import(
            /* webpackChunkName: "views-sign-up" */ "@/views/authentication/SignUp"
          )
      }
    ]
  },
  {
    path: "/page",
    component: () =>
      import(
        /* webpackChunkName: "layouts-page-index" */ "@/layouts/page/index"
      ),
    children: [
      {
        path: "product-list",
        name: "ProductList",
        component: () =>
          import(
            /* webpackChunkName: "views-products-list" */ "@/views/page/ProductList"
          )
      }
    ]
  },
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "views-default-index" */ "@/layouts/default/index"
      ),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "views-dashboard" */ "@/views/Dashboard")
      },
      {
        path: "/grid-system",
        name: "GridSystem",
        component: () =>
          import(
            /* webpackChunkName: "views-grid-system" */ "@/views/GridSystem"
          )
      },
      {
        path: "/grid-list-page",
        name: "GridListPage",
        component: () =>
          import(
            /* webpackChunkName: "views-grid-list-page" */ "@/views/GridListPage"
          )
      },
      {
        path: "/break-points",
        name: "BreakPoints",
        component: () =>
          import(
            /* webpackChunkName: "views-break-points" */ "@/views/BreakPoints"
          )
      },
      {
        path: "/typo",
        name: "Typo",
        component: () =>
          import(/* webpackChunkName: "views-typo" */ "@/views/Typography")
      },
      {
        path: "/tables",
        name: "Tables",
        component: () =>
          import(/* webpackChunkName: "views-tables" */ "@/views/Tables")
      },
      {
        path: "/forms/validation-form",
        name: "ValidationForm",
        component: () =>
          import(
            /* webpackChunkName: "views-validation-form" */ "@/views/form/ValidationForms"
          )
      },
      {
        path: "/forms/app-form",
        name: "AppForm",
        component: () =>
          import(
            /* webpackChunkName: "views-app-form" */ "@/views/form/AppForms"
          )
      },
      {
        path: "/buttons",
        name: "Buttons",
        component: () =>
          import(/* webpackChunkName: "views-buttons" */ "@/views/Buttons")
      },
      {
        path: "/icons",
        name: "Icons",
        component: () =>
          import(/* webpackChunkName: "views-icons" */ "@/views/Icons")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
