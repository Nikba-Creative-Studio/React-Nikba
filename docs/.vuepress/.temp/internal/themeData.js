export const themeData = JSON.parse("{\"logo\":\"./react.svg\",\"navbar\":[\"/\",\"/get-started\"],\"sidebar\":[{\"text\":\"Parte introductivă\",\"collapsible\":false,\"children\":[{\"text\":\"Introducere în curs\",\"link\":\"/introduction/introduction\"},{\"text\":\"Programul cursului\",\"link\":\"/introduction/program\"}]},{\"text\":\"Fundamentele React\",\"collapsible\":false,\"children\":[{\"text\":\"Istoria creării React\",\"link\":\"/base/history\"},{\"text\":\"Conectarea React\",\"link\":\"/base/connect\"},{\"text\":\"Rendering în React\",\"link\":\"/base/render\"},{\"text\":\"Virtual DOM\",\"link\":\"/base/virtualdom\"},{\"text\":\"Ce este JSX\",\"link\":\"/base/jsx\"},{\"text\":\"Decompunerea UI\",\"link\":\"/base/decomposition\"},{\"text\":\"Componente în React\",\"link\":\"/base/components\"},{\"text\":\"Compoziția și extragerea componentelor în React\",\"link\":\"/base/composition\"},{\"text\":\"Utilizare avansată a props-urilor\",\"link\":\"/base/props\"},{\"text\":\"Descompunerea props-urilor\",\"link\":\"/base/decompositionprops\"},{\"text\":\"Utilizarea avansată a JSX. React.Children\",\"link\":\"/base/advancedjsx\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
