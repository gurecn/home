import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/home/',
  title: "语燕输入法",
  description: "纯净、安全、轻快的输入法",
  head: [
    ['link', { rel: 'icon', href: '/home/logo.svg' }] 
  ],
  themeConfig: {
    aside: false,
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: '反馈', link: 'https://github.com/gurecn/YuyanIme/issues' },
      { text: '讨论', link: 'https://github.com/gurecn/YuyanIme/discussions' },
      { text: '声明', link: '/privacypolicy' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gurecn/YuyanIme' },
      { icon: 'gitee', link: 'https://gitee.com/gurecn/YuyanIme' }
    ],

    footer: {
      copyright: 'Copyright © 2026 语燕输入法. All Rights Reserved.'
    },
  }
})
