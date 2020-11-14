const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    trailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/hello': { page: '/hello' }
      };
    },
    pwa: {
        dest: 'public',
        publicExcludes: ['!routes.json'],
        runtimeCaching,
    },
})