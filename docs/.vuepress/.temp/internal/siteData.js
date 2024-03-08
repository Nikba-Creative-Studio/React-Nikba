export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"ro-RO\",\"title\":\"React.js - Curs de Dezvoltare\",\"description\":\"Vă veți pune bazele învățării React. Veți stăpâni toate instrumentele de bază de depanare și dezvoltare care fac parte din bibliotecă, veți crea scheletul aplicației și veți pregăti toate componentele de design.\",\"head\":[[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossorigin\":\"use-credentials\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#46bd87\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
