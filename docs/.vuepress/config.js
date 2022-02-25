
module.exports = {
    // 站点配置
    base: '/',
    lang: 'zh-CN',
    title: 'yjt',// 网页标题
    description: '这是我的第一个 VuePress 站点',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [ // config ref : https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'STL',
                children: [
                  {
                    text: 'vector',
                    link: '/vector/vector.md',
                    // 该元素将一直处于激活状态
                    activeMatch: '/vector/',
                  },
                ],
              },
              {
                text: 'Github',
                link: 'https://github.com/yuanjiteng'
              }
        ]
    },
}