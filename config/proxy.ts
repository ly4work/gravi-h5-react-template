const proxy: { [key: string]: Object } = {
  dev: {
    '/api/': {
      target: 'https://proapi.azurewebsites.net/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
export default proxy;
