import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { searchPlugin } from "@vuepress/plugin-search";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import { seoPlugin } from "@vuepress/plugin-seo";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default defineUserConfig({
	lang: "ro-RO",

	title: "React.js - Curs de Dezvoltare",
	description:
		"Vă veți pune bazele învățării React. Veți stăpâni toate instrumentele de bază de depanare și dezvoltare care fac parte din bibliotecă, veți crea scheletul aplicației și veți pregăti toate componentele de design.",
	shouldPrefetch: false,
	
	head: [
		["meta", { name: "theme-color", content: "#3eaf7c" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
		],

		['link', { rel: 'icon', href: '/react.svg' }],
		['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: '/android-chrome-512x512.png' }],
		['link', { rel: 'mask-icon', href: 'react.svg', color: '#3eaf7c' }],
		['meta', { name: 'msapplication-TileImage', content: '/android-chrome-192x192.png' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }]
	],
	
	theme: defaultTheme({
		logo: "./react.svg",
		navbar: [
			{
				text: 'Principală',
				link: '/',
			},
			{
				text: 'Introducere',
				link: '/introduction/introduction',
			},
			{
				text: 'Curs React.js',
				link: '/base/history',
			},
		],
		locales: {
			"/": {
				lastUpdatedText: "Ultima actualizare",
				contributorsText: "Contribuitori",
			},
		},

		

		sidebar: [
			{
				text: "Parte introductivă",
				collapsible: true,
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
				collapsible: true,
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
				"/": {
					copy: "Copiază",
					copied: "Copiat!",
				},
			},
		}),
		searchPlugin({
			// options
		}),

		sitemapPlugin({
			// options
		}),
		seoPlugin({
			// options
			hostname: "https://react.md",
		}),
		pwaPlugin({
			// options
		}),
		googleAnalyticsPlugin({
			id: "G-9ZM8VVKLTR",
		}),
	],

	bundler: viteBundler(),
});
