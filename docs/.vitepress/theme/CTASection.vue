<script setup>
</script>

<template>
  <section class="cta-section">
    <h2 class="cta-title">开始使用语燕输入法</h2>
    <p class="cta-desc">免费开源 · 尊重隐私 · 纯净体验</p>
    <div class="cta-buttons">
      <a
        class="cta-btn primary"
        href="https://github.com/gurecn/YuyanIme/releases"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        Github 下载
      </a>
      <a
        class="cta-btn secondary"
        href="https://gitee.com/gurecn/YuyanIme/releases"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gitee 下载
      </a>
    </div>
  </section>
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
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.cta-desc {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
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
  text-decoration: none !important;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.cta-btn.primary {
  background: var(--vp-c-brand-1);
  color: #fff;
  box-shadow: 0 4px 14px rgba(64, 112, 244, 0.25);
}

.cta-btn.primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(64, 112, 244, 0.35);
}

.cta-btn.secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.cta-btn.secondary:hover {
  background: var(--vp-c-bg-soft-up);
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
}

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
}
</style>
