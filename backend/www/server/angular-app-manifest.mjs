
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/PostList",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/PostList"
  },
  {
    "renderMode": 2,
    "route": "/PostItem"
  },
  {
    "renderMode": 2,
    "route": "/Authentification"
  }
],
  assets: {
    'index.csr.html': {size: 2041, hash: '9c99fb35c8bb5168309d53db4b16ab47c35dfc06649dc98fcbc039de8a8e2e6b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1073, hash: 'a88b10a235360a14ebfe406025dbdd3d2171a69ba1ad01150f802f4a65a0a2ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'PostList/index.html': {size: 3374, hash: 'c28d719c01334e5c1619527b04485a58feaf6c20c38cd15c62df399872624830', text: () => import('./assets-chunks/PostList_index_html.mjs').then(m => m.default)},
    'PostItem/index.html': {size: 3286, hash: 'e7c25a94e97df9c997b03a8f0b588599e4ea3cd4ba8c4abcbdebee69e7d4608a', text: () => import('./assets-chunks/PostItem_index_html.mjs').then(m => m.default)},
    'Authentification/index.html': {size: 3395, hash: '0262eccfcb2c4d78576207f44700f59203eeb562913baf7b514b97d05c025c6a', text: () => import('./assets-chunks/Authentification_index_html.mjs').then(m => m.default)},
    'styles-OFR327GG.css': {size: 154544, hash: 'A2XvT9MBnrU', text: () => import('./assets-chunks/styles-OFR327GG_css.mjs').then(m => m.default)}
  },
};
