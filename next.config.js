module.exports = {
    trailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/hello': { page: '/hello' }
      };
    }
  };