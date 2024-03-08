import comp from "/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/404.html.vue"
const data = JSON.parse("{\"path\":\"/404.html\",\"title\":\"\",\"lang\":\"ro-RO\",\"frontmatter\":{\"layout\":\"NotFound\",\"description\":\"404 Not Found\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://react.md/404.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"React.js - Curs de Dezvoltare\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"404 Not Found\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ro-RO\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"\\\",\\\"description\\\":\\\"404 Not Found\\\"}\"]]},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"autoDesc\":true}")
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
