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

	base: '/',
	
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
		docsDir: 'docs',
		hostname: 'https://react.md',
		repo: 'Nikba-Creative-Studio/React-Nikba',
		docsBranch: 'main',
		docsRepo: 'Nikba-Creative-Studio/React-Nikba',
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
				editLinkText: "Editează această pagină pe GitHub",
			},
		},

		

		sidebar: [
			{
				text: "Parte introductivă",
				collapsible: true,
				children: [
					'/introduction/introduction',
					'/introduction/program',
				],
			},
			{
				text: "Fundamentele React",
				collapsible: true,
				children: [
					'/base/history',
					'/base/connect',
					'/base/render',
					'/base/virtualdom',
					'/base/jsx',
					'/base/decomposition',
					'/base/components',
					'/base/composition',
					'/base/props',
					'/base/decompositionprops',
					'/base/advancedjsx',
					'/base/state',
					'/base/stateupdate',
					'/base/lists',
					'/base/classcomponent',
					'/base/lifecycle',
					'/base/stateup',
					'/base/proptypes',
					'/base/conclusion',
				],
			},
			{
				text: "Instrumentarul React",
				collapsible: true,
				children: [
					'/tools/introduction',
					'/tools/infrastucture',
					'/tools/appstructure',
					'/tools/import',
					'/tools/images',
					'/tools/css',
					'/tools/fonts',
					'/tools/debbuging',
					'/tools/infrastructure',
					'/tools/conclusion',
				],
			}
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
