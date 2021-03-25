import withPWA from 'next-pwa'

export default withPWA({
  pwa: {
    dest: 'public' // swの出力ディレクトリ
    // runtimeCaching: []
  }
})
