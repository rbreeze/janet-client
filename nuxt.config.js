const pkg = require('./package')

// if (process.env.DEPLOY_ENV === 'GH_PAGES') console.log("Generating for gh-pages...")
// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/janet-client/'
//   }
// } : {}

// export default {
//   ...routerBase
// }

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "Janet - Hello!",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      { rel: 'stylesheet', type: 'text/css', href: "https://fonts.googleapis.com/css?family=Sarabun" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt', 
    'nuxt-fontawesome',
    '@nuxtjs/axios'
  ],

  fontawesome: {
    component: 'fa', 
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', 
        icons: ['fas']
      }
    ]
  },

  axios: {
    proxyHeaders: false,
    credentials: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['@fortawesome/fontawesome-free-solid-svg-icons$'] = '@fortawesome/fontawesome-free-solid-svg-icons/shakable.es.js'
    }
  }, 

  router: {
    base: '/janet-client/'
  }
  
}
