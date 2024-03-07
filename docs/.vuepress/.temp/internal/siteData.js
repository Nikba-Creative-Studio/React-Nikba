export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"ro-RO\",\"title\":\"React.js - Curs de Dezvoltare\",\"description\":\"Vă veți pune bazele învățării React. Veți stăpâni toate instrumentele de bază de depanare și dezvoltare care fac parte din bibliotecă, veți crea scheletul aplicației și veți pregăti toate componentele de design.\",\"head\":[],\"locales\":{}}")

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
