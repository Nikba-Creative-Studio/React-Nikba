export const themeData = JSON.parse("{\"logo\":\"./react.svg\",\"docsDir\":\"docs\",\"repo\":\"Nikba-Creative-Studio/React-Nikba\",\"docsBranch\":\"main\",\"docsRepo\":\"Nikba-Creative-Studio/React-Nikba\",\"navbar\":[{\"text\":\"Principală\",\"link\":\"/\"},{\"text\":\"Introducere\",\"link\":\"/introduction/introduction\"},{\"text\":\"Curs React.js\",\"link\":\"/base/history\"}],\"locales\":{\"/\":{\"lastUpdatedText\":\"Ultima actualizare\",\"contributorsText\":\"Contribuitori\",\"editLinkText\":\"Editează această pagină pe GitHub\",\"selectLanguageName\":\"English\"}},\"sidebar\":[{\"text\":\"Parte introductivă\",\"collapsible\":true,\"children\":[\"/introduction/introduction\",\"/introduction/program\"]},{\"text\":\"Fundamentele React\",\"collapsible\":true,\"children\":[\"/base/history\",\"/base/connect\",\"/base/render\",\"/base/virtualdom\",\"/base/jsx\",\"/base/decomposition\",\"/base/components\",\"/base/composition\",\"/base/props\",\"/base/decompositionprops\",\"/base/advancedjsx\"]}],\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
