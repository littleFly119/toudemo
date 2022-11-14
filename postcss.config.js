module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}

// module.exports = {
//   plugins: {
//     //设计稿的十分之一
//     // vant设计搞为375
//     // postcss-pxtorem 插件的版本需要 >= 5.0.0
//     'postcss-pxtorem': {
//       rootValue({file}) {
//         console.log(file)
//         return (file.indexOf('vant') !== -1?37.5:75);
//       },
//       propList: ['*'],
//     },
//   },
// };
