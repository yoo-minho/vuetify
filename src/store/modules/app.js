const state = {
  drawer: false,
  //right: null,
  gradient: "rgba(0,0,0,.7), rgba(0,0,0,.7)",
  items: [
    { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
    {
      title: "Forms",
      icon: "mdi-form-select",
      items: [
        { title: "Validation-Form", to: "/forms/validation-form" },
        { title: "App-Form", to: "/forms/app-form" }
      ]
    },
    {
      title: "Pages",
      icon: "mdi-menu",
      items: [
        {
          title: "authentication",
          icon: "mdi-login",
          items: [
            {
              title: "sign-in",
              icon: "mdi-login",
              to: "/authentication/sign-in"
            },
            {
              title: "sign-up",
              icon: "mdi-logout",
              to: "/authentication/sign-up"
            }
          ]
        },
        {
          title: "product-list",
          icon: "mdi-reproduction",
          to: "/page/product-list"
        }
      ]
    },
    { title: "Grid-System", icon: "mdi-image", to: "/grid-system" },
    { title: "Grid-List-Page", icon: "mdi-image", to: "/grid-list-page" },
    { title: "Break-Points", icon: "mdi-image", to: "/break-points" },
    { title: "typo", icon: "mdi-image", to: "/typo" },
    {
      title: "Tables",
      icon: "mdi-table-settings",
      items: [
        { title: "Basic Table", icon: "mdi-login", to: "/tables/basic-tables" },
        { title: "App Table", icon: "mdi-logout", to: "/tables/app-tables" }
      ]
    },
    { title: "Buttons", icon: "mdi-gesture-tap-button", to: "/buttons" },
    { title: "Icons", icon: "mdi-emoticon-excited-outline", to: "/icons" }
  ]
};
const getters = {
  getDrawer: state => state.drawer
};
const mutations = {
  setDrawer(state, data) {
    state.drawer = data;
  }
};
const actions = {
  toggleDrawer({ commit }, value) {
    commit("setDrawer", value);
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
