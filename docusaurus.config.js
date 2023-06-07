// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ahmadhi Prananta - LeetCode",
  tagline: "Crack the Code: Unleashing LeetCode Solutions",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/leetcode/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Recedivies", // Usually your GitHub org/user name.
  projectName: "leetcode", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Recedivies/leetcode",
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: "https://github.com/Recedivies/leetcode",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Ahmadhi Prananta",
        // logo: {
        //   alt: "Ahmadhi Prananta Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            label: "📖 Solutions",
            to: "/solutions/",
            activeBaseRegex: `/solutions/`,
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Recedivies/leetcode",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "General",
            items: [
              {
                label: "Solutions",
                to: "/solutions",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Recedivies/leetcode",
              },
              {
                label: "Contact",
                href: "mailto:ahmadhiprananta@gmail.com",
              },
            ],
          },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ahmadhi Prananta - LeetCode. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "solutions",
        path: "solutions",
        routeBasePath: "solutions",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
        // showLastUpdateTime: true,
        // showLastUpdateAuthor: true,
        editUrl: "https://github.com/Recedivies/leetcode",
      },
    ],
  ],
};

module.exports = config;
