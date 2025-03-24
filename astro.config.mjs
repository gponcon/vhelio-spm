import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';
import { targetBlank } from './src/plugins/targetBlank';

// https://astro.build/config
export default defineConfig({
	site: 'https://vhelio-spm.poncon.fr',
	trailingSlash: "never",
	markdown: {
		rehypePlugins: [
			[targetBlank, { domain: 'vhelio-spm.poncon.fr' }],
			[
				rehypeExternalLinks,
				{
				  content: { type: 'text', value: ' 🡥' }
				}
			],
		],
	},
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
			logo: {
				light: './src/assets/logo-vhelio-light.png',
				dark: './src/assets/logo-vhelio-dark.png',
			},
			sidebar: [
				{
					label: 'Annonces',
					autogenerate: { directory: 'annonces' },
				},
				{
					label: 'Le Vhélio de SPM',
					autogenerate: { directory: 'vhelio-spm' },
				},
				{
					label: 'Fabrique ton Vhélio !',
					items: [
						{ label: 'Comment faire ?', slug: 'fabrication/comment-fabriquer' },
						{ label: 'Versions & Options', slug: 'fabrication/versions-et-options' },
						{ label: 'Guide de Fabrication', slug: 'fabrication/guide' },
            { label: 'Adaptations locales', slug: 'fabrication/adaptations' },
					],
				},
				{
					label: 'Partenaires & Médias',
					items: [
						{ label: 'Partenaires stratégiques', slug: 'partenaires' },
						{ label: 'Professionnels', slug: 'professionnels' },
						{ label: 'Médias', slug: 'medias' },
					],
				},
				{ label: 'A Propos', slug: 'a-propos' },
			],
		}),
	],
});
