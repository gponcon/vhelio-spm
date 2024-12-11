import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vhelio-spm.poncon.fr',
	trailingSlash: "never",
	integrations: [
		starlight({
			title: "Un Vhélio pour l'archipel !",
			locales: {
				root: {
						label: 'Français',
						lang: 'fr-FR',
				},
			},
			social: {
				github: 'https://github.com/gponcon/vhelio-spm',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
