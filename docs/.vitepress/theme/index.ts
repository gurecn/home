import DefaultTheme from 'vitepress/theme'
import { defineComponent, h, onMounted } from 'vue'
import CTASection from './CTASection.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    setup() {
      onMounted(() => {
        initDownloadIntercept()
      })

      return () =>
        h(DefaultTheme.Layout, null, {
          'home-features-after': () =>
            h('div', { class: 'cta-wrapper' }, [h(CTASection)])
        })
    }
  })
}

function initDownloadIntercept() {
  document.querySelectorAll('.action a[href*="/releases"]').forEach((link) => {
    if (link.dataset.downloadIntercepted) return
    link.dataset.downloadIntercepted = 'true'

    link.addEventListener('click', (e) => {
      if (window.innerWidth > 768) {
        e.preventDefault()
        window.dispatchEvent(
          new CustomEvent('download-request', {
            detail: { url: (link as HTMLAnchorElement).href }
          })
        )
      }
    })
  })
}
