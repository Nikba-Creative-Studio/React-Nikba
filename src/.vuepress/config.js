const { description } = require("../../package");

module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: "React.js - Curs de Dezvoltare",
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		["meta", { name: "theme-color", content: "#3eaf7c" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
		],

    ['link', { rel: 'icon', href: 'react.svg' }],
    ['link', { rel: 'icon', href: 'favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: 'android-chrome-512x512.png' }],
    ['link', { rel: 'mask-icon', href: 'react.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: 'android-chrome-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		repo: "",
		editLinks: true,
		docsDir: "",
		editLinkText: "",
		serviceWorker: true,
		lastUpdated: false,
		logo: 'react.svg',
		nav: [
			{
				text: "Guide",
				link: "/guide/",
			},
			{
				text: "VuePress",
				link: "https://v1.vuepress.vuejs.org",
			},
		],
		sidebarDepth: 1,
		sidebar: [
			{
				title: "🐰 Parte introductivă",
				collapsable: false,
				children: [["/introduction/introduction", "Introducere în curs"]],
			},
		],
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: [
		"@vuepress/plugin-back-to-top",
		"@vuepress/plugin-medium-zoom",
		[
			"@vuepress/pwa",
			{
				serviceWorker: true,
				updatePopup: true,
			},
		],
	],
};
