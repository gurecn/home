<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import QrcodeVue from 'qrcode.vue'

const modalVisible = ref(false)
const modalUrl = ref('')
const modalPlatform = ref('')

function openDownloadModal(e) {
  const url = e.detail?.url
  if (!url) return
  modalUrl.value = url
  modalPlatform.value = url.includes('gitee') ? 'Gitee' : 'GitHub'
  modalVisible.value = true
}

function closeModal() {
  modalVisible.value = false
}

function onOverlayClick(e) {
  if (e.target === e.currentTarget) closeModal()
}

function onKeydown(e) {
  if (e.key === 'Escape' && modalVisible.value) closeModal()
}

onMounted(() => {
  window.addEventListener('download-request', openDownloadModal)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('download-request', openDownloadModal)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <section class="source-section">
    <h2 class="source-title">源代码</h2>
    <p class="source-subtitle">代码开源，欢迎克隆</p>
    <div class="repo-row">
      <div class="repo-group">
        <span class="repo-label">应用</span>
        <div class="repo-buttons">
          <a class="repo-btn" href="https://github.com/gurecn/YuyanIme" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a class="repo-btn" href="https://gitee.com/gurecn/YuyanIme" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.946 16.296c-.204.456-.624.78-1.122.882-.498.102-1.014-.018-1.416-.33l-2.408-1.848-1.44 1.104c-.396.306-.912.426-1.41.324-.498-.102-.918-.426-1.122-.882l-2.88-6.48c-.204-.456-.084-.99.312-1.296.396-.306.912-.426 1.41-.324.498.102.918.426 1.122.882l1.44 3.24 2.88-2.208c.396-.306.912-.426 1.41-.324.498.102.918.426 1.122.882l2.88 6.48c.204.456.084.99-.312 1.296z"/>
            </svg>
            Gitee
          </a>
        </div>
      </div>
      <div class="repo-group">
        <span class="repo-label">SDK</span>
        <div class="repo-buttons">
          <a class="repo-btn" href="https://github.com/gurecn/yuyansdk" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <div
      v-show="modalVisible"
      class="dl-modal-overlay"
      @click="onOverlayClick"
    >
      <div class="dl-modal" role="dialog" aria-modal="true">
        <button class="dl-modal-close" @click="closeModal" aria-label="关闭">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h3 class="dl-modal-title">下载语燕输入法</h3>
        <p class="dl-modal-subtitle">通过 {{ modalPlatform }} 获取最新 APK</p>

        <div class="dl-modal-body">
          <div class="dl-qr-wrapper">
            <QrcodeVue :value="modalUrl" :size="180" level="M" />
            <p class="dl-qr-hint">用手机扫描二维码下载</p>
          </div>

          <div class="dl-modal-divider">
            <span>或</span>
          </div>

          <a
            class="dl-modal-link"
            :href="modalUrl"
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
  </Teleport>
</template>

<style scoped>
.source-section {
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.source-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

.source-subtitle {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  margin: 0 0 28px;
}

.repo-row {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

.repo-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.repo-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}

.repo-buttons {
  display: flex;
  gap: 8px;
}

.repo-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.repo-btn:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

/* ===== Download Modal ===== */
.dl-modal-overlay {
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

.dl-modal {
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

.dl-modal-close {
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

.dl-modal-close:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.dl-modal-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 6px;
}

.dl-modal-subtitle {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 28px;
}

.dl-modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.dl-qr-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.dl-qr-wrapper :deep(canvas) {
  border-radius: 8px;
}

.dl-qr-hint {
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.dl-modal-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  color: var(--vp-c-text-3);
  font-size: 0.8125rem;
}

.dl-modal-divider::before,
.dl-modal-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--vp-c-divider);
}

.dl-modal-link {
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

.dl-modal-link:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .source-section {
    padding: 0 16px;
  }

  .source-title {
    font-size: 1.25rem;
  }

  .source-subtitle {
    font-size: 0.875rem;
    margin-bottom: 20px;
  }

  .repo-row {
    flex-direction: column;
    gap: 16px;
  }

  .repo-group {
    flex-wrap: wrap;
    justify-content: center;
  }

  .dl-modal {
    padding: 32px 24px 24px;
  }
}
</style>
