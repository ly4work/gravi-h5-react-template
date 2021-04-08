const proxy: { [key: string]: Object } = {
  dev: {
    '/api/': {
      target: 'http://gateway-dev.gaojin.com.cn',
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
