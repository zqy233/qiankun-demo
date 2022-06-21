import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, initGlobalState, start } from "qiankun"
/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
// import render from "./render/ReactRender"
// import render from './render/VueRender';

/**
 * Step1 初始化应用（可选）
 */
// render({ loading: true })
// const loader = loading => render({ loading })
/**
 * Step2 注册子应用
 */
registerMicroApps([
  {
    name: "vue2",
    entry: "//localhost:8081",
    container: "#subapp-viewport",
    // loader,
    activeRule: "/vue2"
  },
  {
    name: "vue3",
    entry: "//localhost:8080",
    container: "#subapp-viewport",
    // loader,
    activeRule: "/vue3"
  },
  {
    name: "react",
    entry: "//localhost:3000",
    container: "#subapp-viewport",
    // loader,
    activeRule: "/react"
  }
])

/** Step3 设置默认进入的子应用 */
setDefaultMountApp("/react")

const state = {
  token: "1111-2222-3333"
}

// 初始化 state
const actions = initGlobalState(state)

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("[qiankun 主应用]全局值", state, prev)
})
actions.setGlobalState(state)
// actions.offGlobalStateChange()

/** Step4 启动应用 */
start()

/** 第一次加载完成运行 */
runAfterFirstMounted(() => {
  console.log("[qiankun 主应用]加载完毕")
})
