require('dotenv').config();
module.exports = {
	siteMetadata: {
		title: `España Sima`,
		name: `España Sima`,
		siteUrl: `https://espanasima.com`,
		description: `Hagamos Pangea grande otra vez. Pangea una, no cincuenta y una. Si eres un pangeano de bien, esta es tu web`,
		hero: {
			heading: `Bienvenidos a Pangea. Si eres un pangeano de bien, esta es tu web. #Pangea1no51`,
			maxWidth: 692
		},
		social: [
			{
				name: `twitter`,
				url: `https://twitter.com/box_esp`
			}
			// {
			// 	name: `instagram`,
			// 	url: `https://instagram.com/narative.co`
			// }
		]
	},

	plugins: [
		{
			resolve: '@narative/gatsby-theme-novela',
			options: {
				authorsPage: true,
				sources: {
					local: false,
					contentful: true
				}
			}
		},
		// {
		// 	resolve: '@narative/gatsby-theme-novela',
		// 	options: {
		// 		authorsPage: true,
		// 		sources: {
		// 			contentful: true
		// 		}
		// 	}
		// },
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Novela by Narative`,
				short_name: `Novela`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `standalone`,
				icon: `src/assets/favicon.png`
			}
		}
	]
};
