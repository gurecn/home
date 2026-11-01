<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import QrcodeVue from 'qrcode.vue'

const downloads = [
  {
    name: 'GitHub',
    releaseUrl: 'https://github.com/gurecn/YuyanIme/releases',
    accent: '#24292f',
    accentHover: '#32383f',
    shadow: 'rgba(36, 41, 47, 0.25)',
    icon: 'github'
  },
  {
    name: 'Gitee',
    releaseUrl: 'https://gitee.com/gurecn/YuyanIme/releases',
    accent: '#C71D23',
    accentHover: '#d9252b',
    shadow: 'rgba(199, 29, 35, 0.25)',
    icon: 'gitee'
  }
]

const isMobile = ref(false)
const modalOpen = ref(false)
const activeDownload = ref(null)

let mediaQuery = null

function onMediaChange(e) {
  isMobile.value = e.matches
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 768px)')
  isMobile.value = mediaQuery.matches
  mediaQuery.addEventListener('change', onMediaChange)
})

onUnmounted(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', onMediaChange)
  }
})

function handleClick(dl) {
  if (isMobile.value) {
    window.open(dl.releaseUrl, '_blank')
  } else {
    activeDownload.value = dl
    modalOpen.value = true
  }
}

function closeModal() {
  modalOpen.value = false
  activeDownload.value = null
}

function onModalKeydown(e) {
  if (e.key === 'Escape') closeModal()
}
</script>

<template>
  <section class="cta-section">
    <h2 class="cta-title">开始使用语燕输入法</h2>
    <p class="cta-desc">免费开源 · 尊重隐私 · 纯净体验</p>
    <div class="cta-buttons">
      <button
        v-for="dl in downloads"
        :key="dl.name"
        class="cta-btn"
        :class="[dl.icon]"
        @click="handleClick(dl)"
      >
        <svg v-if="dl.icon === 'github'" class="btn-icon" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <span v-else class="btn-icon-badge">G</span>
        {{ dl.name }} 下载
      </button>
    </div>
  </section>

  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modalOpen && activeDownload"
        class="modal-overlay"
        @click.self="closeModal"
        @keydown="onModalKeydown"
      >
        <div class="modal-content" role="dialog" aria-modal="true">
          <button class="modal-close" @click="closeModal" aria-label="关闭">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <h3 class="modal-title">下载语燕输入法</h3>
          <p class="modal-subtitle">通过 {{ activeDownload.name }} 获取最新 APK</p>

          <div class="modal-body">
            <div class="qr-wrapper">
              <QrcodeVue :value="activeDownload.releaseUrl" :size="180" level="M" />
              <p class="qr-hint">用手机扫描二维码下载</p>
            </div>

            <div class="modal-divider">
              <span>或</span>
            </div>

            <a
              class="modal-link"
              :href="activeDownload.releaseUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              直接下载 APK
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.cta-section {
  text-align: center;
  padding: 48px 24px;
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.cta-desc {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 0 0 32px;
  letter-spacing: 0.05em;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 32px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-family: inherit;
  transition: all 0.2s ease;
}

.btn-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.btn-icon-badge {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: 800;
  flex-shrink: 0;
}

.cta-btn.github {
  background: var(--vp-c-brand-1);
  color: #fff;
  box-shadow: 0 4px 14px rgba(64, 112, 244, 0.25);
}

.cta-btn.github:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(64, 112, 244, 0.35);
}

.cta-btn.gitee {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.cta-btn.gitee:hover {
  background: var(--vp-c-bg-soft-up);
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
}

/* ===== Modal ===== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
}

.modal-content {
  position: relative;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 40px 36px 32px;
  max-width: 380px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}

.modal-close:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 6px;
}

.modal-subtitle {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 28px;
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.qr-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.qr-wrapper :deep(canvas) {
  border-radius: 8px;
}

.qr-hint {
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.modal-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  color: var(--vp-c-text-3);
  font-size: 0.8125rem;
}

.modal-divider::before,
.modal-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--vp-c-divider);
}

.modal-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff !important;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.modal-link:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

/* ===== Transition ===== */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content {
  transform: scale(0.95);
  opacity: 0;
}

.modal-leave-to .modal-content {
  transform: scale(0.95);
  opacity: 0;
}

/* ===== Responsive ===== */
@media (max-width: 640px) {
  .cta-section {
    padding: 36px 20px;
  }

  .cta-title {
    font-size: 1.375rem;
  }

  .cta-desc {
    font-size: 0.875rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .modal-content {
    padding: 32px 24px 24px;
  }
}
</style>
