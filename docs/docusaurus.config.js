
// const config = {
//   presets: [
//     [
//       'classic',
//       ({
//         docs: {
//           sidebarPath: './docs/sidebars.js',
//         },
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],
//   themeConfig:
//     ({
//       navbar: {
//         title: 'My Site',
//       },
//       footer: {
//         style: 'dark',
//         links: 
//           {
//             title: 'Docs'
//           }
//         }})
// };

// export default config;

// @ts-check
const config = {
  title: 'Crypto Tracker Docs',
  tagline: 'Documentation for Crypto Price Tracker', 
  url: 'http://localhost',     // Change this to your actual domain when deploying
  baseUrl: '/',                // Use `/` if deploying at root

  projectName: 'crypto-tracker-docs',      // Repository name (change if deploying to GitHub Pages)

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./docs/sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Crypto Tracker Docs',
      items: [
        {
          type: 'doc',
          docId: 'crypto-tracker',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {}, // Removes footer
  },
};

module.exports = config;
