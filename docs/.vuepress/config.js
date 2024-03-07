import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { searchPlugin } from '@vuepress/plugin-search'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { seoPlugin } from '@vuepress/plugin-seo'

export default defineUserConfig({
	lang: "ro-RO",

	title: "React.js - Curs de Dezvoltare",
	description:
		"Vă veți pune bazele învățării React. Veți stăpâni toate instrumentele de bază de depanare și dezvoltare care fac parte din bibliotecă, veți crea scheletul aplicației și veți pregăti toate componentele de design.",

	theme: defaultTheme({
		logo: "./react.svg",
		navbar: ["/", "/get-started"],
		sidebar: [
			{
				text: "Parte introductivă",
				collapsible: false,
				children: [
					{
						text: "Introducere în curs",
						link: "/introduction/introduction",
					},
					{
						text: "Programul cursului",
						link: "/introduction/program",
					},
				],
			},
			{
				text: "Fundamentele React",
				collapsible: false,
				children: [
					{
						text: "Istoria creării React",
						link: "/base/history",
					},
					{
						text: "Conectarea React",
						link: "/base/connect",
					},
					{
						text: "Rendering în React",
						link: "/base/render",
					},
					{
						text: "Virtual DOM",
						link: "/base/virtualdom",
					},
					{
						text: "Ce este JSX",
						link: "/base/jsx",
					},
					{
						text: "Decompunerea UI",
						link: "/base/decomposition",
					},
					{
						text: "Componente în React",
						link: "/base/components",
					},
					{
						text: "Compoziția și extragerea componentelor în React",
						link: "/base/composition",
					},
					{
						text: "Utilizare avansată a props-urilor",
						link: "/base/props",
					},
					{
						text: "Descompunerea props-urilor",
						link: "/base/decompositionprops",
					},
					{
						text: "Utilizarea avansată a JSX. React.Children",
						link: "/base/advancedjsx",
					},
				],
			},
		],
	}),

  plugins: [
    copyCodePlugin({
      locales: {
        '/': {
          copy: 'Copiază',
          copied: 'Copiat!',
        }
      }
    }),
    searchPlugin({
      // options
    }),
    catalogPlugin({
      // Your options
    }),
    sitemapPlugin({
      // options
      
    }),
    seoPlugin({
      // options
      hostname: 'https://react.md'
    }),
  ],

	bundler: viteBundler(),
});
