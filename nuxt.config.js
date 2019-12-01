export default {
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/apollo'
  ],

  css: [
    '@assets/css/bootstrap.css',
    '@assets/css/main.scss'
  ],
  // Give apollo module options
  apollo: {
    tokenName: 'apollo-cejobs', // optional, default: apollo-token
    cookieAttributes: {
      /**
        * Define when the cookie will be removed. Value can be a Number
        * which will be interpreted as days from time of creation or a
        * Date instance. If omitted, the cookie becomes a session cookie.
        */
      expires: 7, // optional, default: 7 (days)

      /**
        * Define the path where the cookie is available. Defaults to '/'
        */
      path: '/', // optional
      /**
        * A Boolean indicating if the cookie transmission requires a
        * secure protocol (https). Defaults to false.
        */
      secure: false,
    },
    includeNodeModules: true,    // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Basic', // optional, default: 'Bearer'
    
    // (Optional) Default 'apollo' definition
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    // required
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1338/graphql',
        httpLinkOptions: {
          credentials: 'same-origin'
        },
      },
    }
  },

  plugins: [
  ],

  render: {
    ssr: false,
  },
  generate: {
    ssr: false,
    dir: "public"
  }
}
