import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import CTASection from './CTASection.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h('div', { class: 'cta-wrapper' }, [
        h(CTASection)
      ])
    })
  }
}
