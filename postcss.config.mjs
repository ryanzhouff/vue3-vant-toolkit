import pxtorem from '@minko-fe/postcss-pxtorem';

export default {
  plugins: [
    pxtorem({
      rootValue: ({ file }) => {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
      unitPrecision: 6
    })
  ]
}
