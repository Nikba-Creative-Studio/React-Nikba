export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Curs"} }],
  ["/base/advancedjsx.html", { loader: () => import(/* webpackChunkName: "advancedjsx.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/advancedjsx.html.js"), meta: {"title":"Utilizarea avansată a JSX. React.Children"} }],
  ["/base/components.html", { loader: () => import(/* webpackChunkName: "components.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/components.html.js"), meta: {"title":"Componente în React"} }],
  ["/base/composition.html", { loader: () => import(/* webpackChunkName: "composition.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/composition.html.js"), meta: {"title":"Compoziția și extragerea componentelor în React"} }],
  ["/base/connect.html", { loader: () => import(/* webpackChunkName: "connect.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/connect.html.js"), meta: {"title":"Conectarea React"} }],
  ["/base/decomposition.html", { loader: () => import(/* webpackChunkName: "decomposition.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/decomposition.html.js"), meta: {"title":"Decompunerea UI"} }],
  ["/base/decompositionprops.html", { loader: () => import(/* webpackChunkName: "decompositionprops.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/decompositionprops.html.js"), meta: {"title":"Descompunerea props-urilor"} }],
  ["/base/history.html", { loader: () => import(/* webpackChunkName: "history.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/history.html.js"), meta: {"title":"Istoria creării React"} }],
  ["/base/jsx.html", { loader: () => import(/* webpackChunkName: "jsx.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/jsx.html.js"), meta: {"title":"Ce este JSX"} }],
  ["/base/props.html", { loader: () => import(/* webpackChunkName: "props.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/props.html.js"), meta: {"title":"Utilizare avansată a props-urilor"} }],
  ["/base/render.html", { loader: () => import(/* webpackChunkName: "render.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/render.html.js"), meta: {"title":"Rendering în React"} }],
  ["/base/virtualdom.html", { loader: () => import(/* webpackChunkName: "virtualdom.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/virtualdom.html.js"), meta: {"title":"Virtual DOM"} }],
  ["/introduction/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/introduction/introduction.html.js"), meta: {"title":"Introducere în curs"} }],
  ["/introduction/program.html", { loader: () => import(/* webpackChunkName: "program.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/introduction/program.html.js"), meta: {"title":"Programul cursului"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Introducere în curs"} }],
  ["/guide/using-vue.html", { loader: () => import(/* webpackChunkName: "using-vue.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/guide/using-vue.html.js"), meta: {"title":"Using Vue in Markdown"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/base/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/index.html.js"), meta: {"title":"Base"} }],
  ["/introduction/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/introduction/index.html.js"), meta: {"title":"Introduction"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
