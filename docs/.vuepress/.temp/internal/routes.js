export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Curs Online"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Curs"} }],
  ["/base/advancedjsx.html", { loader: () => import(/* webpackChunkName: "advancedjsx.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/advancedjsx.html.js"), meta: {"title":"Utilizarea avansată a JSX. React.Children"} }],
  ["/base/classcomponent.html", { loader: () => import(/* webpackChunkName: "classcomponent.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/classcomponent.html.js"), meta: {"title":"Componente de clasă în detalii"} }],
  ["/base/components.html", { loader: () => import(/* webpackChunkName: "components.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/components.html.js"), meta: {"title":"Componente în React"} }],
  ["/base/composition.html", { loader: () => import(/* webpackChunkName: "composition.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/composition.html.js"), meta: {"title":"Compoziția și extragerea componentelor în React"} }],
  ["/base/conclusion.html", { loader: () => import(/* webpackChunkName: "conclusion.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/conclusion.html.js"), meta: {"title":"Concluzie"} }],
  ["/base/connect.html", { loader: () => import(/* webpackChunkName: "connect.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/connect.html.js"), meta: {"title":"Conectarea React"} }],
  ["/base/decomposition.html", { loader: () => import(/* webpackChunkName: "decomposition.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/decomposition.html.js"), meta: {"title":"Decompunerea UI"} }],
  ["/base/decompositionprops.html", { loader: () => import(/* webpackChunkName: "decompositionprops.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/decompositionprops.html.js"), meta: {"title":"Descompunerea props-urilor"} }],
  ["/base/history.html", { loader: () => import(/* webpackChunkName: "history.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/history.html.js"), meta: {"title":"Istoria creării React"} }],
  ["/base/jsx.html", { loader: () => import(/* webpackChunkName: "jsx.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/jsx.html.js"), meta: {"title":"Ce este JSX"} }],
  ["/base/lifecycle.html", { loader: () => import(/* webpackChunkName: "lifecycle.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/lifecycle.html.js"), meta: {"title":"Ciclul de viață al componentelor"} }],
  ["/base/lists.html", { loader: () => import(/* webpackChunkName: "lists.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/lists.html.js"), meta: {"title":"Liste în React. Proprietatea key"} }],
  ["/base/props.html", { loader: () => import(/* webpackChunkName: "props.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/props.html.js"), meta: {"title":"Utilizare avansată a props-urilor"} }],
  ["/base/proptypes.html", { loader: () => import(/* webpackChunkName: "proptypes.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/proptypes.html.js"), meta: {"title":"PropTypes - Verificarea tipurilor"} }],
  ["/base/render.html", { loader: () => import(/* webpackChunkName: "render.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/render.html.js"), meta: {"title":"Rendering în React"} }],
  ["/base/state.html", { loader: () => import(/* webpackChunkName: "state.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/state.html.js"), meta: {"title":"Starea internă a componentelor"} }],
  ["/base/stateup.html", { loader: () => import(/* webpackChunkName: "stateup.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/stateup.html.js"), meta: {"title":"Ridicarea stării"} }],
  ["/base/stateupdate.html", { loader: () => import(/* webpackChunkName: "stateupdate.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/stateupdate.html.js"), meta: {"title":"Cum să modifici starea în componentele React"} }],
  ["/base/virtualdom.html", { loader: () => import(/* webpackChunkName: "virtualdom.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/base/virtualdom.html.js"), meta: {"title":"Virtual DOM"} }],
  ["/introduction/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/introduction/introduction.html.js"), meta: {"title":"Introducere în curs"} }],
  ["/introduction/program.html", { loader: () => import(/* webpackChunkName: "program.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/introduction/program.html.js"), meta: {"title":"Programul cursului"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Introducere în curs"} }],
  ["/guide/using-vue.html", { loader: () => import(/* webpackChunkName: "using-vue.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/guide/using-vue.html.js"), meta: {"title":"Using Vue in Markdown"} }],
  ["/tools/appstructure.html", { loader: () => import(/* webpackChunkName: "appstructure.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/appstructure.html.js"), meta: {"title":"Structura aplicației"} }],
  ["/tools/conclusion.html", { loader: () => import(/* webpackChunkName: "conclusion.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/conclusion.html.js"), meta: {"title":"Concluzie"} }],
  ["/tools/css.html", { loader: () => import(/* webpackChunkName: "css.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/css.html.js"), meta: {"title":"CSS-Module. Composes"} }],
  ["/tools/debbuging.html", { loader: () => import(/* webpackChunkName: "debbuging.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/debbuging.html.js"), meta: {"title":"Depanarea aplicației"} }],
  ["/tools/fonts.html", { loader: () => import(/* webpackChunkName: "fonts.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/fonts.html.js"), meta: {"title":"Utilizarea fonturilor"} }],
  ["/tools/images.html", { loader: () => import(/* webpackChunkName: "images.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/images.html.js"), meta: {"title":"Utilizarea imaginilor"} }],
  ["/tools/import.html", { loader: () => import(/* webpackChunkName: "import.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/import.html.js"), meta: {"title":"Importul de module"} }],
  ["/tools/infrastructure.html", { loader: () => import(/* webpackChunkName: "infrastructure.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/infrastructure.html.js"), meta: {"title":"Compilarea aplicației"} }],
  ["/tools/infrastucture.html", { loader: () => import(/* webpackChunkName: "infrastucture.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/infrastucture.html.js"), meta: {"title":"Infrastructura aplicației - CRA"} }],
  ["/tools/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/tools/introduction.html.js"), meta: {"title":"Introducere în instrumentarul React"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
