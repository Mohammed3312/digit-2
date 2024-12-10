
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/digit-2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/digit-2"
  }
],
  assets: {
    'index.csr.html': {size: 5025, hash: 'fe6124bfde49c500de910f42397872707cfeb517a174890b2998b4bd83e8b936', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1063, hash: '6f1802d67aec5b801c61bbe7a622ed55e8f776fe24723bfe3a47a9f54ed7892b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 43790, hash: '091f745a6a6e15e979be841624174936bd700fe31d98e5672e56c6404b90e051', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UM26G5D6.css': {size: 316730, hash: 't6QcoQ0Wlac', text: () => import('./assets-chunks/styles-UM26G5D6_css.mjs').then(m => m.default)}
  },
};
