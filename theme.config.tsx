import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Ghost Remix</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="GhostRemix Docs" />
      <meta property="og:description" content="Documentation for GhostRemix" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  project: {
    link: 'https://github.com/mikan-laboratory/ghost-remix',
  },
  docsRepositoryBase: 'https://github.com/mikan-laboratory/ghost-remix-docs',
  footer: {
    text: 'Ghost Remix Documentation',
  },
};

export default config;
