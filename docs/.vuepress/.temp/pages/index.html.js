import comp from "/Users/nikba/Dev/React-Nikba/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"ro-RO\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"./react.svg\",\"actions\":[{\"text\":\"Începe acum →\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"Introducere →\",\"link\":\"/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Începutul Călătoriei în React\",\"details\":\"Descoperă fundamentele React.js și învață să construiești interfețe de utilizator dinamice și responsive.\"},{\"title\":\"Componente și State\",\"details\":\"Aprofundează conceptele de componente și state pentru a crea aplicații React complexe și eficiente.\"},{\"title\":\"De la Teorie la Practică\",\"details\":\"Aplică cunoștințele dobândite prin proiecte practice, consolidându-ți abilitățile de dezvoltare în React.\"}],\"footer\":\"Copyright © 2024 Made by Bargan Nicolai with ❤️\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://react.md/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"React.js - Curs de Dezvoltare\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Home\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ro-RO\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Home\\\"}\"]]},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}