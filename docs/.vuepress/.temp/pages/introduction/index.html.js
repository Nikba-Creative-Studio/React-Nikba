import comp from "/Users/nikba/Work/Dev/React-Nikba/docs/.vuepress/.temp/pages/introduction/index.html.vue"
const data = JSON.parse("{\"path\":\"/introduction/\",\"title\":\"Introduction\",\"lang\":\"ro-RO\",\"frontmatter\":{\"title\":\"Introduction\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://react.md/introduction/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"React.js - Curs de Dezvoltare\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Introduction\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ro-RO\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Introduction\\\"}\"]]},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
