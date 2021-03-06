
const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project starter' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  manifest: {
    name: 'Nuxt Starter',
    theme_color: '#3B8070'
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/vee-validate.js'
  ],

  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios'
  ],

  router: {
    middleware: ['auth']
  },

  auth: {
    endpoints: {
      login: { url: 'http://vue.laravel.starter.test/api/v1/auth/login', method: 'post', propertyName: 'token' },
      logout: { url: 'http://vue.laravel.starter.test/api/v1/auth/logout', method: 'post' },
      user: { url: 'http://vue.laravel.starter.test/api/v1/auth/me', method: 'post', propertyName: false }
    },
    redirect: {
      login: '/auth/login',
      home: '/home'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/vee-validate.js'
    ],
    extractCSS: true,
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ]
  }
}
